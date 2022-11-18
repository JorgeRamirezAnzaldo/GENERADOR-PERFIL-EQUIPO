//Import main class Employee
const Employee = require ("./Employee.js");

//Create Intern class that extends Employee
class Intern extends Employee{
    //Create constructor for Intern class
    constructor(Name, Id, Email, School){
        //Validate that the name of the intern is not an empty string
        if (typeof Name !== "string" || !Name.trim().length) {
            throw new Error("Name of the intern must not be an empty string");
        }
        //Validate that the id of the intern is a positive number
        if (typeof Id !== "number" || isNaN(Id) || Id < 0) {
            throw new Error("Id of the intern must be a positive number");
        }
        //Validate that the email of the intern is not an empty string and that it has a valid format
        if (typeof Email !== "string" || !Email.trim().length) {
            throw new Error("Email of the intern must not be an empty string");
        } else if (!Email.toLowerCase().match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)){
            throw new Error("Email format for intern is wrong");
        }
        //Validate that the school is not an empty string
        if (typeof School !== "string" || !School.trim().length) {
            throw new Error("School of the intern must not be an empty string");
        }
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