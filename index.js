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

function init(){
    inq.prompt(managerquestions)
    .then((answers) => {
        const manager = new Manager(answers.Name, answers.Id, answers.Email, answers.Office);
        console.log(manager.OfficeNumber);
        console.log(manager.getRole());
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
                //renderhtml(engineer);
                displayChoices();
            });

        }else if(answers.Option == "Add Intern"){

            console.log("Add Intern selected");
            inq.prompt(internquestions)
            .then((answers) => {
                const intern = new Intern(answers.Name, answers.Id, answers.Email, answers.School);
                console.log(intern.getSchool());
                console.log(intern.getRole());
                //renderhtml(intern);
                displayChoices();
            });
            
        }else if(answers.Option == "Finish team building process"){

            console.log("Finish process");
            //createhtmlfile();
        }
    });
}

init();