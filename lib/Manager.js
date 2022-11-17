//Import main class Employee
const Employee = require ("./Employee.js");

//Create Manager class that extends Employee
class Manager extends Employee {
    //Create constructor for Manager class
    constructor(Name, Id, Email, OfficeNumber){
      super(Name, Id, Email); //Send name, id and email parameters to superclass
      this.OfficeNumber = OfficeNumber; //Define OfficeNumber property for the manager
    }
    //Method to get and return the role "Manager" for the manager
    getRole(){
        return "Manager";
    }
}

//Create Manager class that extends Employee
module.exports = Manager;