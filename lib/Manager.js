//Import main class Employee
const Employee = require ("./Employee.js");

//Create Manager class that extends Employee
class Manager extends Employee {
    //Create constructor for Manager class
    constructor(Name, Id, Email, OfficeNumber){
      //Validate that the name of the manager is not an empty string
      if (typeof Name !== "string" || !Name.trim().length) {
        throw new Error("Name of the manager must not be an empty string");
      }
      //Validate that the id of the manager is a positive number
      if (typeof Id !== "number" || isNaN(Id) || Id < 0) {
        throw new Error("Id of the manager must be a positive number");
      }
      //Validate that the email of the manager is not an empty string and that it has a valid format
      if (typeof Email !== "string" || !Email.trim().length) {
        throw new Error("Email of the manager must not be an empty string");
      } else if (!Email.toLowerCase().match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)){
        throw new Error("Email format for manager is wrong");
      }
      //Validate that the office number is not an empty string
      if (typeof OfficeNumber !== "number" || isNaN(OfficeNumber) || OfficeNumber < 0) {
        throw new Error("Office number of the manager must be a positive number");
      }
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