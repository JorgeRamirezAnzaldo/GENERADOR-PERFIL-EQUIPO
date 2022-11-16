const Employee = require ("./Employee.js");

class Manager extends Employee {
    constructor(Name, Id, Email, OfficeNumber){
      super(Name, Id, Email);
      this.OfficeNumber = OfficeNumber;  
    }

    getRole(){
        return "Manager";
    }
}

module.exports = Manager;