//Import Engineer class
const Engineer = require("../lib/Engineer.js");

//Tests for Engineer class
describe("Engineer", () => {
    //Test the constructor of the Engineer class
    describe("Initialization", () => {
        it("should create an object with name, id, email and GitHub user", () =>{ //Engineer class constructor should create an object with name, id, email and Github user properties
            //Define name, id, email and GitHub user
            let name = "Carl";
            let id = 1;
            let email = "carl@hotmail.com";
            let user = "CarlA";
            const engineer = new Engineer(name, id, email, user); //Create an engineer object with defined name, id, email and GitHub user

            expect(engineer.name).toEqual(name); //Validate that the name property of the engineer object is equal to name = "Carl"
            expect(engineer.id).toEqual(id); //Validate that the id property of the engineer object is equal to id = "1"
            expect(engineer.email).toEqual(email); //Validate that the email property of the engineer object is equal to email = "carl@hotmail.com"
            expect(engineer.GitHubUser).toEqual(user); //Validate that the GitHubUser property of the engineer object is equal to user = "CarlA"
    
        });
        //Engineer constructor should create an error object when creating a new engineer with name equal to empty string
        it("should throw an error if not provided a name", () => {
            const cb = () => new Engineer("", 1, "sarah@hotmail.com", "SarahM");
            const err = new Error("Name of the engineer must not be an empty string");
            expect(cb).toThrowError(err);
        });
        //Engineer constructor should create an error object when creating a new engineer with name equal to a number
        it("should throw an error if provided name is a number", () => {
            const cb = () => new Engineer(2, 1, "sarah@hotmail.com", "SarahM");
            const err = new Error("Name of the engineer must not be an empty string");
            expect(cb).toThrowError(err);
        });
        //Engineer constructor should create an error object when creating a new engineer without providing id
        it("should throw an error if id was not provided", () => {
            const cb = () => new Engineer("Sarah", NaN, "sarah@hotmail.com", "SarahM");
            const err = new Error("Id of the engineer must be a positive number");
            expect(cb).toThrowError(err);
        });
        //Engineer constructor should create an error object when creating a new engineer with id equal to a string
        it("should throw an error if provided id is a string", () => {
            const cb = () => new Engineer("Sarah", "1", "sarah@hotmail.com", "SarahM");
            const err = new Error("Id of the engineer must be a positive number");
            expect(cb).toThrowError(err);
        });
        //Engineer constructor should create an error object when creating a new engineer with id equal to negative number
        it("should throw an error if provided id is a negative number", () => {
            const cb = () => new Engineer("Sarah", -1, "sarah@hotmail.com", "SarahM");
            const err = new Error("Id of the engineer must be a positive number");
            expect(cb).toThrowError(err);
        });
        //Engineer constructor should create an error object when creating a new engineer with email equal to empty string
        it("should throw an error if not provided an email", () => {
            const cb = () => new Engineer("Sarah", 1, "", "SarahM");
            const err = new Error("Email of the engineer must not be an empty string");
            expect(cb).toThrowError(err);
        });
        //Engineer constructor should create an error object when creating a new engineer with email equal to a number
        it("should throw an error if provided email is a number", () => {
            const cb = () => new Engineer("Sarah", 1, 3, "SarahM");
            const err = new Error("Email of the engineer must not be an empty string");
            expect(cb).toThrowError(err);
        });
        //Engineer constructor should create an error object when creating a new engineer with email without proper format
        it("should throw an error if provided email has an invalid format", () => {
            const cb = () => new Engineer("Sarah", 1, "sarah@hotmail", "SarahM");
            const err = new Error("Email format for engineer is wrong");
            expect(cb).toThrowError(err);
        });
        //Engineer constructor should create an error object when creating a new engineer with GitHub user equal to empty string
        it("should throw an error if not provided a GitHub user", () => {
            const cb = () => new Engineer("Sarah", 1, "sarah@hotmail.com", "");
            const err = new Error("GitHub user of the engineer must not be an empty string");
            expect(cb).toThrowError(err);
        });
        //Engineer constructor should create an error object when creating a new engineer with GitHub user equal to a number
        it("should throw an error if provided GitHub is a number", () => {
            const cb = () => new Engineer("Sarah", 1, "sarah@hotmail.com", 1);
            const err = new Error("GitHub user of the engineer must not be an empty string");
            expect(cb).toThrowError(err);
        });

    });
    //Test the method getName() of the Employee superclass
    describe("getName", () => {
        it("should return the name of the engineer using the method of the superclass", () =>{ //getName() method of the superclass should return the name of the engineer object
            //Define name, id, email and GitHub user
            let name = "David";
            let id = 2;
            let email = "david@hotmail.com";
            let user = "DavidB";
            const engineer = new Engineer(name, id, email, user); //Create an engineer object with defined name, id, email and GitHub user
            const result = engineer.getName(); //Use getName() method to get the name property of the engineer object
            expect(result).toEqual(name); //Validate that the returned result is equal to name = "David"
    
        });
    });
    //Test the method getId() of the Employee superclass
    describe("getId", () => {
        it("should return the id of the engineer using the method of the superclass", () =>{ //getId() method of the superclass should return the id of the engineer object
            //Define name, id, email and GitHub user
            let name = "John";
            let id = 30;
            let email = "john@hotmail.com";
            let user = "JohnC";
            const engineer = new Engineer(name, id, email, user); //Create an engineer object with defined name, id, email and GitHub user
            const result = engineer.getId(); //Use getId() method to get the id property of the engineer object
            expect(result).toEqual(id); //Validate that the returned result is equal to id = "30"
    
        });
    });
    //Test the method getEmail() of the Employee superclass
    describe("getEmail", () => {
        it("should return the email of the engineer using the method of the superclass", () =>{ //getEmail() method of the superclass should return the email of the engineer object
            //Define name, id, email and GitHub user
            let name = "Marcus";
            let id = 50;
            let email = "marcus@hotmail.com";
            let user = "MarcusD";
            const engineer = new Engineer(name, id, email, user); //Create an engineer object with defined name, id, email and GitHub user
            const result = engineer.getEmail(); //Use getEmail() method to get the email property of the engineer object
            expect(result).toEqual(email); //Validate that the returned result is equal to email = "marcus@hotmail.com"
    
        });
    });
    //Test the method getGithub() of the Engineer class
    describe("getGithub", () => {
        it("should return the GitHub user of the engineer", () =>{ //getGithub() method should return the GitHub user of the engineer object
            //Define name, id, email and GitHub user
            let name = "Jessica";
            let id = 7;
            let email = "jessica@hotmail.com";
            let user = "JessicaE";
            const engineer = new Engineer(name, id, email, user); //Create an engineer object with defined name, id, email and GitHub user
            const result = engineer.getGithub(); //Use getGithub() method to get the GitHubUser property of the engineer object
            expect(result).toEqual(user); //Validate that the returned result is equal to user = "JessicaE"
    
        });
    });
    //Test the method getRole() of the Engineer class
    describe("getRole", () => {
        it("should return the role equal to Engineer", () =>{ //getRole() method should return "Engineer"
            //Define name, id, email and GitHub user
            let name = "Martin";
            let id = 10;
            let email = "martin@hotmail.com";
            let user = "MartinF";
            const engineer = new Engineer(name, id, email, user); //Create an engineer object with defined name, id, email and GitHub user
            const result = engineer.getRole(); //Use getRole() method to get the role value from the engineer object
            expect(result).toEqual("Engineer"); //Validate that the returned result is equal "Engineer"
    
        });
    });

});