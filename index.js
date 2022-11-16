const inq = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

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


function appendInitialData(){
    const content = fs.readFileSync("./src/srcindex.html", "utf8");
    fs.appendFileSync("./dist/index.html", content);
}

function addCard(object){
    const Name = object.getName();
    const Id = object.getId();
    const Email = object.getEmail();
    const Role = object.getRole();
    let icon = "";
    let thirdlistitem = "";

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

    fs.appendFileSync("./dist/index.html", textcard);

}

function appendFinalData(){
    const finaltext = 
    ` \n</main>
    </body>
  </html>`;
    fs.appendFileSync("./dist/index.html", finaltext);
}

function createCSSFile(){
    const styletext = fs.readFileSync("./src/srcstyle.css", "utf8");
    fs.writeFileSync("./dist/style.css", styletext);
}



function init(){
    inq.prompt(managerquestions)
    .then((answers) => {
        const manager = new Manager(answers.Name, answers.Id, answers.Email, answers.Office);
        console.log(manager.OfficeNumber);
        console.log(manager.getRole());
        appendInitialData();
        addCard(manager);
        displayChoices();
    });
};

function displayChoices(){
    inq.prompt(options)
    .then((answers) => {

        if (answers.Option == "Add Engineer"){

            console.log("Add engineer selected");
            inq.prompt(engineerquestions)
            .then((answers) => {
                const engineer = new Engineer(answers.Name, answers.Id, answers.Email, answers.GitHub);
                console.log(engineer.getGithub());
                console.log(engineer.getRole());
                addCard(engineer);
                displayChoices();
            });

        }else if(answers.Option == "Add Intern"){

            console.log("Add Intern selected");
            inq.prompt(internquestions)
            .then((answers) => {
                const intern = new Intern(answers.Name, answers.Id, answers.Email, answers.School);
                console.log(intern.getSchool());
                console.log(intern.getRole());
                addCard(intern);
                displayChoices();
            });
            
        }else if(answers.Option == "Finish team building process"){

            console.log("Finish process");
            appendFinalData();
            createCSSFile();
        }
    });
}




init();