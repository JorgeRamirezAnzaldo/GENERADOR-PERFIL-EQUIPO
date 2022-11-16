class Employee{

    constructor(Name, Id, Email){
        this.name = Name;
        this.id = Id;
        this.email = Email;
    }

    getName(){
        return this.Name;
    }

    getId(){
        return this.Id;
    }

    getRole(){
        return "Employee";
    }
}

module.exports = Employee;