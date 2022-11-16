const inq = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
let initialText = "";

const managerquestions = [
    {
        type: "input",
        name: "Name",
        message: "Which is the name of the manager?",
    },
    {
        type: "input",
        name: "Id",
        message: "Which is the ID of the manager?",
    },
    {
        type: "input",
        name: "Email",
        message: "Which is the email of the manager?",
    },
    {
        type: "input",
        name: "Office",
        message: "Which is the office number of the manager?",
    },

];

const options = [
    {
        type: "list",
        name: "Option",
        message: "Choose an option to build your team",
        choices: ["Add Engineer", "Add Intern", "Finish team building process"], 
    }

];

const engineerquestions = [
    {
        type: "input",
        name: "Name",
        message: "Which is the name of the engineer?",
    },
    {
        type: "input",
        name: "Id",
        message: "Which is the ID of the engineer?",
    },
    {
        type: "input",
        name: "Email",
        message: "Which is the email of the engineer?",
    },
    {
        type: "input",
        name: "GitHub",
        message: "Which is the GitHub user of the engineer?",
    },

];

const internquestions = [
    {
        type: "input",
        name: "Name",
        message: "Which is the name of the intern?",
    },
    {
        type: "input",
        name: "Id",
        message: "Which is the ID of the intern?",
    },
    {
        type: "input",
        name: "Email",
        message: "Which is the email of the intern?",
    },
    {
        type: "input",
        name: "School",
        message: "Which is the school of the intern?",
    },

];


function getInitialData(){
    const content = fs.readFileSync("./src/srcindex.html", "utf8");
    return content;
}

function addCard(object, initText){
    const Name = object.getName();
    const Id = object.getId();
    const Email = object.getEmail();
    const Role = object.getRole();
    let icon = "";
    let thirdlistitem = "";
    let text = "";

    if(Role == "Manager"){
        const Office = object.OfficeNumber;
        icon = "<i class=\"bi bi-cup-hot\"></i>";
        thirdlistitem = "Office number: " + Office;
    } else if (Role == "Engineer"){
        const GitHub = object.getGithub();
        icon = "<i class=\"bi bi-eyeglasses\"></i>";
        thirdlistitem = `GitHub: <a href="https://github.com/${GitHub}">${GitHub}</a>`;
    } else if (Role == "Intern"){
        const School = object.getSchool();
        icon = "<i class=\"bi bi-mortarboard\"></i>";
        thirdlistitem = "School: " + School;
    }

    let textcard = 
    `\n<div class="card" style="width: 320px;">
        <div class="card-body bg-primary text-white">
            <h5 class="card-title">${Name}</h5>
            <p class="card-text">${icon} ${Role}</p>
        </div>
        <div class="List">
            <ul class="list-group">
                <li class="list-group-item">ID: ${Id}</li>
                <li class="list-group-item">Email: <a href="mailto:${Email}">${Email}</a></li>
                <li class="list-group-item">${thirdlistitem}</li>
            </ul>
        </div>
    </div>`;

    text = initText + textcard;
    return text;

    

}

function appendFinalData(initText){
    const finaltext = 
    ` \n</main>
    </body>
  </html>`;
    const completetext = initText + finaltext;
    fs.writeFileSync("./dist/index.html", completetext, (err) =>
    err ? console.error(err) : console.log("Files successfully created"));
}


function createCSSFile(){
    const styletext = fs.readFileSync("./src/srcstyle.css", "utf8");
    fs.writeFileSync("./dist/style.css", styletext);
}

function init(){
    fs.rmSync("./dist/index.html", {force:true});
    fs.rmSync("./dist/style.css", {force:true});
    inq.prompt(managerquestions)
    .then((answers) => {
        const manager = new Manager(answers.Name, answers.Id, answers.Email, answers.Office);
        initialText = getInitialData();
        initialText = addCard(manager, initialText);
        displayChoices();
    });
};

function displayChoices(){
    inq.prompt(options)
    .then((answers) => {

        if (answers.Option == "Add Engineer"){
            inq.prompt(engineerquestions)
            .then((answers) => {
                const engineer = new Engineer(answers.Name, answers.Id, answers.Email, answers.GitHub);
                initialText = addCard(engineer, initialText);
                displayChoices();
            });

        }else if(answers.Option == "Add Intern"){
            inq.prompt(internquestions)
            .then((answers) => {
                const intern = new Intern(answers.Name, answers.Id, answers.Email, answers.School);
                initialText = addCard(intern, initialText);
                displayChoices();
            });
            
        }else if(answers.Option == "Finish team building process"){
            appendFinalData(initialText);
            createCSSFile();
        }
    });
}

init();