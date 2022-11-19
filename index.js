//Include inquirer package
const inq = require("inquirer");
//Include fs module
const fs = require("fs");
//Import Manager class
const Manager = require("./lib/Manager.js");
//Import Engineer class
const Engineer = require("./lib/Engineer.js");
//Import Intern class
const Intern = require("./lib/Intern.js");
//Initialize initial text for index.html creation
let initialText = "";

//Define questions to be displayed for the manager
const managerquestions = [
    {
        //Ask for the name of the manager
        type: "input",
        name: "Name",
        message: "Which is the name of the manager?",
    },
    {
        //Ask for the id of the manager
        type: "number",
        name: "Id",
        message: "Which is the ID of the manager?",
    },
    {
        //Ask for the email of the manager
        type: "input",
        name: "Email",
        message: "Which is the email of the manager?",
    },
    {
        //Ask for the office number of the manager
        type: "number",
        name: "Office",
        message: "Which is the office number of the manager?",
    },

];

//Define options to display after defining manager data
const options = [
    {
        //Ask the user if he/she wants to add an engineer, an intern or finish the process
        type: "list",
        name: "Option",
        message: "Choose an option to build your team",
        choices: ["Add Engineer", "Add Intern", "Finish team building process"], 
    }

];

//Define questions to be displayed for engineer
const engineerquestions = [
    {
        //Ask the name of the engineer
        type: "input",
        name: "Name",
        message: "Which is the name of the engineer?",
    },
    {
        //Ask the id of the engineer
        type: "number",
        name: "Id",
        message: "Which is the ID of the engineer?",
    },
    {
        //Ask the email of the engineer
        type: "input",
        name: "Email",
        message: "Which is the email of the engineer?",
    },
    {
        //Ask the Github user of the engineer
        type: "input",
        name: "GitHub",
        message: "Which is the GitHub user of the engineer?",
    },

];

//Define questions to be displayed for intern
const internquestions = [
    {
        //Ask the name of the intern
        type: "input",
        name: "Name",
        message: "Which is the name of the intern?",
    },
    {
        //Ask the id of the intern
        type: "number",
        name: "Id",
        message: "Which is the ID of the intern?",
    },
    {
        //Ask the email of the intern
        type: "input",
        name: "Email",
        message: "Which is the email of the intern?",
    },
    {
        //Ask the school of the intern
        type: "input",
        name: "School",
        message: "Which is the school of the intern?",
    },

];

//Function to get the text from the template located in srcindex.html
function getInitialData(){
    const content = fs.readFileSync("./src/srcindex.html", "utf8"); //Read the file with the code template
    return content; //Return the text
}

//Function to add the html for a card to be placed in the final index.html
function addCard(object, initText){
    const Name = object.getName(); //Get the name of the employee
    const Id = object.getId(); //Get the id of the employee
    const Email = object.getEmail(); //Get the email of the employee
    const Role = object.getRole(); //Get the role of the employee
    //Initialize variables
    let icon = ""; 
    let thirdlistitem = "";
    let text = "";

    if(Role == "Manager"){ //If the employee is a manager
        const Office = object.OfficeNumber; //Get the office number of the manager
        icon = "<i class=\"bi bi-cup-hot\"></i>"; //Define the icon text for the manager
        thirdlistitem = "Office number: " + Office; //Create the text for the office number
    } else if (Role == "Engineer"){ //If the employee is an engineer
        const GitHub = object.getGithub(); //Get the Github user of the engineer
        icon = "<i class=\"bi bi-eyeglasses\"></i>"; //Define the icon text for the engineer
        thirdlistitem = `GitHub: <a href="https://github.com/${GitHub}" target="_blank">${GitHub}</a>`; //Create the text for the GitHub user
    } else if (Role == "Intern"){ //If the employee is an intern
        const School = object.getSchool(); //Get the School of the intern
        icon = "<i class=\"bi bi-mortarboard\"></i>"; //Create the icon text for the intern
        thirdlistitem = "School: " + School; //Create the text for the school
    }

    //Build the text to add a card to the index.html with the proper parameters
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

    //Add the new card text to the previous generated text
    text = initText + textcard;
    return text; //Return the text
}

//Function to add the final html part for the generated index.html and generate the index.html file
function appendFinalData(initText){
    //Final html part
    const finaltext = 
    ` \n</main>
    </body>
  </html>`;
    const completetext = initText + finaltext; //Generate final complete text
    //Create index.html file with the final text
    fs.writeFile("./dist/index.html", completetext, (err) =>
    err ? console.error(err) : console.log("index.html file successfully created"));
}

//Function to generate the style.css file
function createCSSFile(){
    const styletext = fs.readFileSync("./src/srcstyle.css", "utf8"); //Read the text from the template for the css file
    fs.writeFile("./dist/style.css", styletext, (err) =>
    err ? console.error(err) : console.log("style.css file successfully created")); //Create the style.css file 
}

//Function to display the choices, ask the data for the engineer/intern, create their objects and add cards text
function displayChoices(){
    //Display choices to add an engineer, add an intern or finish process
    inq.prompt(options)
    .then((answers) => {

        if (answers.Option == "Add Engineer"){ //If the user chose to add an engineer
            inq.prompt(engineerquestions) //Display the questions for the engineer
            .then((answers) => { //After answering all questions
                const engineer = new Engineer(answers.Name, answers.Id, answers.Email, answers.GitHub); //Create new engineer using the answers
                initialText = addCard(engineer, initialText); //Add card text for the new created engineer
                displayChoices(); //Display the choices again to the user
            });

        }else if(answers.Option == "Add Intern"){ //If the user chose to add an intern
            inq.prompt(internquestions) //Display the questions for the intern
            .then((answers) => { //After answering all questions
                const intern = new Intern(answers.Name, answers.Id, answers.Email, answers.School); //Create new intern using the answers
                initialText = addCard(intern, initialText); //Add card text for the new created intern
                displayChoices(); //Display the choices again to the user
            });
            
        }else if(answers.Option == "Finish team building process"){ //If the user chose to finish the process
            appendFinalData(initialText); //Create final text and generate index.html file
            createCSSFile(); //Generate style.css file
        }
    });
}

//Function to initialize the application
function init(){
    fs.rmSync("./dist/index.html", {force:true}); //Remove any index.html file in the dist folder
    fs.rmSync("./dist/style.css", {force:true}); //Remove any style.css file in the dist folder
    inq.prompt(managerquestions) //Display the questions for the manager
    .then((answers) => { //After answering all questions
        const manager = new Manager(answers.Name, answers.Id, answers.Email, answers.Office); //Create new manager using the answers
        initialText = getInitialData(); //Get initial text/data for the index.html file generation
        initialText = addCard(manager, initialText); //Add card text for the new created manager
        displayChoices(); //Display choices to add an engineer, add an intern or finish process
    });
};

init(); //Call initilization function to start application