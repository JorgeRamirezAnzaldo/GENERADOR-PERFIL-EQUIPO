const Employee = require ("./Employee.js");

class Engineer extends Employee{
    constructor(Name, Id, Email, GitHubUser){
        super(Name, Id, Email);
        this.GitHubUser = GitHubUser;
    }

    getGithub(){
        return this.GitHubUser;
    }

    getRole(){
        return "Engineer";
    }

}

module.exports = Engineer;