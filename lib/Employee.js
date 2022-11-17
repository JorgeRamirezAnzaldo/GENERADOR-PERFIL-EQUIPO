//Create main Employee class
class Employee{
    //Create constructor for Employee class
    constructor(Name, Id, Email){
        this.name = Name; //Define name property for the employee
        this.id = Id; //Define id property of the employee
        this.email = Email; //Define email property of the employee
    }
    //Method to get and return the name of the employee
    getName(){
        return this.name;
    }
    //Method to get and return the id of the employee
    getId(){
        return this.id;
    }
    //Method to get and return the email of the employee
    getEmail(){
        return this.email;
    }
    //Method to return the role "Employee" for the employee
    getRole(){
        return "Employee";
    }
}

//Export Employee class to make it available in other scripts
module.exports = Employee;