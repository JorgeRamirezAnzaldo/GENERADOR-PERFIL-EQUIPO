//Import main class Employee
const Employee = require ("./Employee.js");

//Create Intern class that extends Employee
class Intern extends Employee{
    //Create constructor for Intern class
    constructor(Name, Id, Email, School){
        super(Name, Id, Email); //Send name, id and email parameters to superclass
        this.School = School; //Define School property for the intern
    }
    //Method to get and return the school of the intern
    getSchool(){
        return this.School;
    }
    //Method to return the role "Intern" for the intern
    getRole(){
        return "Intern";
    }
}

//Export Intern class to make it available in other scripts
module.exports = Intern;