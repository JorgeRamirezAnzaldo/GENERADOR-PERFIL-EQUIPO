//Import Manager class
const Manager = require("../lib/Manager.js");

//Tests for Manager class
describe("Manager", () => {
    //Test the constructor of the Manager class
    describe("Initialization", () => {
        it("should create an object with name, id, email and office number", () =>{ //Manager class constructor should create an object with name, id, email and office number properties
            //Define name, id, email and office number
            let name = "Carl";
            let id = "1";
            let email = "carl@hotmail.com";
            let officeno = "3";
            const manager = new Manager(name, id, email, officeno); //Create a manager object with defined name, id, email and office number

            expect(manager.name).toEqual(name); //Validate that the name property of the manager object is equal to name = "Carl"
            expect(manager.id).toEqual(id); //Validate that the id property of the manager object is equal to id = "1"
            expect(manager.email).toEqual(email); //Validate that the email property of the manager object is equal to email = "carl@hotmail.com"
            expect(manager.OfficeNumber).toEqual(officeno); //Validate that the OfficeNumber property of the manager object is equal to officeno = "3"
    
        });
    });
    //Test the method getName() of the Employee superclass
    describe("getName", () => {
        it("should return the name of the manager using the method of the superclass", () =>{ //getName() method of the superclass should return the name of the manager object
            //Define name, id, email and office number
            let name = "David";
            let id = "2";
            let email = "david@hotmail.com";
            let officeno = "6";
            const manager = new Manager(name, id, email, officeno); //Create a manager object with defined name, id, email and office number
            const result = manager.getName(); //Use getName() method to get the name property of the manager object
            expect(result).toEqual(name); //Validate that the returned result is equal to name = "David"
    
        });
    });
    //Test the method getId() of the Employee superclass
    describe("getId", () => {
        it("should return the id of the manager using the method of the superclass", () =>{ //getId() method of the superclass should return the id of the manager object
            //Define name, id, email and office number
            let name = "John";
            let id = "30";
            let email = "john@hotmail.com";
            let officeno = "9";
            const manager = new Manager(name, id, email, officeno); //Create a manager object with defined name, id, email and office number
            const result = manager.getId(); //Use getId() method to get the id property of the manager object
            expect(result).toEqual(id); //Validate that the returned result is equal to id = "30"
    
        });
    });
    //Test the method getEmail() of the Employee superclass
    describe("getEmail", () => {
        it("should return the email of the manager using the method of the superclass", () =>{ //getEmail() method of the superclass should return the email of the manager object
            //Define name, id, email and office number
            let name = "Marcus";
            let id = "50";
            let email = "marcus@hotmail.com";
            let officeno = "12";
            const manager = new Manager(name, id, email, officeno); //Create a manager object with defined name, id, email and office number
            const result = manager.getEmail(); //Use getEmail() method to get the email property of the manager object
            expect(result).toEqual(email); //Validate that the returned result is equal to email = "marcus@hotmail.com"
    
        });
    });
    //Test the method getRole() of the Manager class
    describe("getRole", () => {
        it("should return the role equal to Manager", () =>{ //getRole() method should return "Manager"
            //Define name, id, email and office number
            let name = "Martin";
            let id = "10";
            let email = "martin@hotmail.com";
            let officeno = "15";
            const manager = new Manager(name, id, email, officeno); //Create a manager object with defined name, id, email and office number
            const result = manager.getRole(); //Use getRole() method to get the role value from the manager object
            expect(result).toEqual("Manager"); //Validate that the returned result is equal "Manager"
    
        });
    });

});