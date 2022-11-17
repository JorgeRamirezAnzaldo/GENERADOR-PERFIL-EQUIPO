//Import main class Employee
const Employee = require ("./Employee.js");

//Create Engineer class that extends Employee
class Engineer extends Employee{
    //Create constructor for Engineer class
    constructor(Name, Id, Email, GitHubUser){
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