const Employee = require("../lib/Employee.js");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with name, id and email", () =>{
            let name = "Carl";
            let id = "1";
            let email = "carl@hotmail.com";
            const employee = new Employee(name, id, email);

            expect(employee.name).toEqual(name);
            expect(employee.id).toEqual(id);
            expect(employee.email).toEqual(email);
    
        });
    });
    describe("getName", () => {
        it("should return the name of the employee", () =>{
            let name = "David";
            let id = "2";
            let email = "david@hotmail.com";
            const employee = new Employee(name, id, email);
            const result = employee.getName();
            expect(result).toEqual(name);
    
        });
    });
    describe("getId", () => {
        it("should return the id of the employee", () =>{
            let name = "John";
            let id = "30";
            let email = "john@hotmail.com";
            const employee = new Employee(name, id, email);
            const result = employee.getId();
            expect(result).toEqual(id);
    
        });
    });
    describe("getEmail", () => {
        it("should return the email of the employee", () =>{
            let name = "Marcus";
            let id = "50";
            let email = "marcus@hotmail.com";
            const employee = new Employee(name, id, email);
            const result = employee.getEmail();
            expect(result).toEqual(email);
    
        });
    });
    describe("getRole", () => {
        it("should return the role equal to Employee", () =>{
            let name = "Martin";
            let id = "10";
            let email = "martin@hotmail.com";
            const employee = new Employee(name, id, email);
            const result = employee.getRole();
            expect(result).toEqual("Employee");
    
        });
    });

});