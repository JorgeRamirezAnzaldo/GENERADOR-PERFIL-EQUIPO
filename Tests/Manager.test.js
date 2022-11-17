const Manager = require("../lib/Manager.js");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with name, id, email and office number", () =>{
            let name = "Carl";
            let id = "1";
            let email = "carl@hotmail.com";
            let officeno = "3";
            const manager = new Manager(name, id, email, officeno);

            expect(manager.name).toEqual(name);
            expect(manager.id).toEqual(id);
            expect(manager.email).toEqual(email);
            expect(manager.OfficeNumber).toEqual(officeno);
    
        });
    });
    describe("getName", () => {
        it("should return the name of the manager using the method of the superclass", () =>{
            let name = "David";
            let id = "2";
            let email = "david@hotmail.com";
            let officeno = "6";
            const manager = new Manager(name, id, email, officeno);
            const result = manager.getName();
            expect(result).toEqual(name);
    
        });
    });
    describe("getId", () => {
        it("should return the id of the manager using the method of the superclass", () =>{
            let name = "John";
            let id = "30";
            let email = "john@hotmail.com";
            let officeno = "9";
            const manager = new Manager(name, id, email, officeno);
            const result = manager.getId();
            expect(result).toEqual(id);
    
        });
    });
    describe("getEmail", () => {
        it("should return the email of the manager using the method of the superclass", () =>{
            let name = "Marcus";
            let id = "50";
            let email = "marcus@hotmail.com";
            let officeno = "12";
            const manager = new Manager(name, id, email, officeno);
            const result = manager.getEmail();
            expect(result).toEqual(email);
    
        });
    });
    describe("getRole", () => {
        it("should return the role equal to Manager", () =>{
            let name = "Martin";
            let id = "10";
            let email = "martin@hotmail.com";
            let officeno = "15";
            const manager = new Manager(name, id, email, officeno);
            const result = manager.getRole();
            expect(result).toEqual("Manager");
    
        });
    });

});