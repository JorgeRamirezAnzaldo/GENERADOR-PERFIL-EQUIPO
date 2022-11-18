//Import Manager class
const Manager = require("../lib/Manager.js");

//Tests for Manager class
describe("Manager", () => {
    //Test the constructor of the Manager class
    describe("Initialization", () => {
        it("should create an object with name, id, email and office number", () =>{ //Manager class constructor should create an object with name, id, email and office number properties
            //Define name, id, email and office number
            let name = "Carl";
            let id = 1;
            let email = "carl@hotmail.com";
            let officeno = 3;
            const manager = new Manager(name, id, email, officeno); //Create a manager object with defined name, id, email and office number

            expect(manager.name).toEqual(name); //Validate that the name property of the manager object is equal to name = "Carl"
            expect(manager.id).toEqual(id); //Validate that the id property of the manager object is equal to id = "1"
            expect(manager.email).toEqual(email); //Validate that the email property of the manager object is equal to email = "carl@hotmail.com"
            expect(manager.OfficeNumber).toEqual(officeno); //Validate that the OfficeNumber property of the manager object is equal to officeno = "3"
    
        });
        //Manager constructor should create an error object when creating a new manager with name equal to empty string
        it("should throw an error if not provided a name", () => {
            const cb = () => new Manager("", 1, "sarah@hotmail.com", 1);
            const err = new Error("Name of the manager must not be an empty string");
            expect(cb).toThrowError(err);
        });
        //Manager constructor should create an error object when creating a new manager with name equal to a number
        it("should throw an error if provided name is a number", () => {
            const cb = () => new Manager(2, 1, "sarah@hotmail.com", 1);
            const err = new Error("Name of the manager must not be an empty string");
            expect(cb).toThrowError(err);
        });
        //Manager constructor should create an error object when creating a new manager without providing id
        it("should throw an error if id was not provided", () => {
            const cb = () => new Manager("Sarah", NaN, "sarah@hotmail.com", 1);
            const err = new Error("Id of the manager must be a positive number");
            expect(cb).toThrowError(err);
        });
        //Manager constructor should create an error object when creating a new manager with id equal to a string
        it("should throw an error if provided id is a string", () => {
            const cb = () => new Manager("Sarah", "1", "sarah@hotmail.com", 1);
            const err = new Error("Id of the manager must be a positive number");
            expect(cb).toThrowError(err);
        });
        //Manager constructor should create an error object when creating a new manager with id equal to negative number
        it("should throw an error if provided id is a negative number", () => {
            const cb = () => new Manager("Sarah", -1, "sarah@hotmail.com", 1);
            const err = new Error("Id of the manager must be a positive number");
            expect(cb).toThrowError(err);
        });
        //Manager constructor should create an error object when creating a new manager with email equal to empty string
        it("should throw an error if not provided an email", () => {
            const cb = () => new Manager("Sarah", 1, "", 1);
            const err = new Error("Email of the manager must not be an empty string");
            expect(cb).toThrowError(err);
        });
        //Manager constructor should create an error object when creating a new manager with email equal to a number
        it("should throw an error if provided email is a number", () => {
            const cb = () => new Manager("Sarah", 1, 3, 1);
            const err = new Error("Email of the manager must not be an empty string");
            expect(cb).toThrowError(err);
        });
        //Manager constructor should create an error object when creating a new manager with email without proper format
        it("should throw an error if provided email has invalid format", () => {
            const cb = () => new Manager("Sarah", 1, "sarah@hotmail", 1);
            const err = new Error("Email format for manager is wrong");
            expect(cb).toThrowError(err);
        });
        //Manager constructor should create an error object when creating a new manager without providing Office number
        it("should throw an error if Office number was not provided", () => {
            const cb = () => new Manager("Sarah", 1, "sarah@hotmail.com", NaN);
            const err = new Error("Office number of the manager must be a positive number");
            expect(cb).toThrowError(err);
        });
        //Manager constructor should create an error object when creating a new manager with Office number equal to a string
        it("should throw an error if provided Office number is a string", () => {
            const cb = () => new Manager("Sarah", 1, "sarah@hotmail.com", "1");
            const err = new Error("Office number of the manager must be a positive number");
            expect(cb).toThrowError(err);
        });
        //Manager constructor should create an error object when creating a new manager with Office number equal to negative number
        it("should throw an error if provided Office number is a negative number", () => {
            const cb = () => new Manager("Sarah", 1, "sarah@hotmail.com", -10);
            const err = new Error("Office number of the manager must be a positive number");
            expect(cb).toThrowError(err);
        });

    });
    //Test the method getName() of the Employee superclass
    describe("getName", () => {
        it("should return the name of the manager using the method of the superclass", () =>{ //getName() method of the superclass should return the name of the manager object
            //Define name, id, email and office number
            let name = "David";
            let id = 2;
            let email = "david@hotmail.com";
            let officeno = 6;
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
            let id = 30;
            let email = "john@hotmail.com";
            let officeno = 9;
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
            let id = 50;
            let email = "marcus@hotmail.com";
            let officeno = 12;
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
            let id = 10;
            let email = "martin@hotmail.com";
            let officeno = 15;
            const manager = new Manager(name, id, email, officeno); //Create a manager object with defined name, id, email and office number
            const result = manager.getRole(); //Use getRole() method to get the role value from the manager object
            expect(result).toEqual("Manager"); //Validate that the returned result is equal "Manager"
    
        });
    });

});