//Import main class Employee
const Employee = require ("./Employee.js");

//Create Engineer class that extends Employee
class Engineer extends Employee{
    //Create constructor for Engineer class
    constructor(Name, Id, Email, GitHubUser){
        //Validate that the name of the engineer is not an empty string
        if (typeof Name !== "string" || !Name.trim().length) {
            throw new Error("Name of the engineer must not be an empty string");
        }
        //Validate that the id of the engineer is a positive number
        if (typeof Id !== "number" || isNaN(Id) || Id < 0) {
            throw new Error("Id of the engineer must be a positive number");
        }
        //Validate that the email of the engineer is not an empty string and that it has a valid format
        if (typeof Email !== "string" || !Email.trim().length) {
            throw new Error("Email of the engineer must not be an empty string");
        } else if (!Email.toLowerCase().match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)){
            throw new Error("Email format for engineer is wrong");
        }
        //Validate that the GitHub user is not an empty string
        if (typeof GitHubUser !== "string" || !GitHubUser.trim().length) {
            throw new Error("GitHub user of the engineer must not be an empty string");
        }
        super(Name, Id, Email); //Send name, id and email parameters to superclass
        this.GitHubUser = GitHubUser; //Define GitHubUser property for the engineer
    }
    //Method to get and return the GitHub user for the engineer
    getGithub(){
        return this.GitHubUser;
    }
    //Method to return the role "Engineer" for the engineer
    getRole(){
        return "Engineer";
    }
}

//Export Engineer class to make it available in other scripts
module.exports = Engineer;