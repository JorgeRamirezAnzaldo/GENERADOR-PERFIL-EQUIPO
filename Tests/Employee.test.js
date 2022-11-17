//Import Employee class
const Employee = require("../lib/Employee.js");

//Tests for Employee class
describe("Employee", () => {
    //Test the constructor of the Employee class
    describe("Initialization", () => {
        it("should create an object with name, id and email", () =>{ //Employee class should create an object with name, id and email properties
            //Define name, id and email
            let name = "Carl"; 
            let id = "1";
            let email = "carl@hotmail.com";
            const employee = new Employee(name, id, email); //Create an employee object with defined name, id and email

            expect(employee.name).toEqual(name); //Validate that the name property of the employee object is equal to name = "Carl"
            expect(employee.id).toEqual(id); //Validate that the id property of the employee object is equal to id = "1"
            expect(employee.email).toEqual(email); //Validate that the email property of the employee object is equal to email = "carl@hotmail.com"
    
        });
    });
    //Test the method getName() of the Employee class
    describe("getName", () => {
        it("should return the name of the employee", () =>{ //getName() method should return the name of the employee object
            //Define name, id and email
            let name = "David"; 
            let id = "2";
            let email = "david@hotmail.com";
            const employee = new Employee(name, id, email); //Create an employee object with defined name, id and email
            const result = employee.getName(); //Use getName() method to get the name property of the employee object
            expect(result).toEqual(name); //Validate that the returned result is equal to name = "David"
    
        });
    });
    //Test the method getId() of the Employee class
    describe("getId", () => {
        it("should return the id of the employee", () =>{ //getId() method should return the id of the employee object
            //Define name, id and email
            let name = "John";
            let id = "30";
            let email = "john@hotmail.com";
            const employee = new Employee(name, id, email); //Create an employee object with defined name, id and email
            const result = employee.getId(); //Use getId() method to get the id property of the employee object
            expect(result).toEqual(id); //Validate that the returned result is equal to id = "30"
    
        });
    });
    //Test the method getEmail() of the Employee class
    describe("getEmail", () => {
        it("should return the email of the employee", () =>{ //getEmail() method should return the email of the employee object
            //Define name, id and email
            let name = "Marcus";
            let id = "50";
            let email = "marcus@hotmail.com";
            const employee = new Employee(name, id, email); //Create an employee object with defined name, id and email
            const result = employee.getEmail(); //Use getEmail() method to get the email property of the employee object
            expect(result).toEqual(email); //Validate that the returned result is equal to email = "marcus@hotmail.com"
    
        });
    });
    //Test the method getRole() of the Employee class
    describe("getRole", () => {
        it("should return the role equal to Employee", () =>{ //getRole() method should return "Employee"
            //Define name, id and email
            let name = "Martin";
            let id = "10";
            let email = "martin@hotmail.com";
            const employee = new Employee(name, id, email); //Create an employee object with defined name, id and email
            const result = employee.getRole(); //Use getRole() method to get the role value from the employee object
            expect(result).toEqual("Employee"); //Validate that the returned result is equal "Employee"
    
        });
    });

});