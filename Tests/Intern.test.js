//Import Intern class
const Intern = require("../lib/Intern.js");

//Tests for Intern class
describe("Intern", () => {
    //Test the constructor of the Intern class
    describe("Initialization", () => {
        it("should create an object with name, id, email and school", () =>{ //Intern class constructor should create an object with name, id, email and school properties
            //Define name, id, email and school
            let name = "Carl";
            let id = "1";
            let email = "carl@hotmail.com";
            let school = "University 1"
            const intern = new Intern(name, id, email, school); //Create an intern object with defined name, id, email and school

            expect(intern.name).toEqual(name); //Validate that the name property of the intern object is equal to name = "Carl"
            expect(intern.id).toEqual(id); //Validate that the id property of the intern object is equal to id = "1"
            expect(intern.email).toEqual(email); //Validate that the email property of the intern object is equal to email = "carl@hotmail.com"
            expect(intern.School).toEqual(school); //Validate that the School property of the intern object is equal to school = "University 1"
    
        });
    });
    //Test the method getName() of the Employee superclass
    describe("getName", () => {
        it("should return the name of the intern using the method of the superclass", () =>{ //getName() method of the superclass should return the name of the intern object
            //Define name, id, email and school
            let name = "David";
            let id = "2";
            let email = "david@hotmail.com";
            let school = "University 2"
            const intern = new Intern(name, id, email, school); //Create an intern object with defined name, id, email and school
            const result = intern.getName(); //Use getName() method to get the name property of the intern object
            expect(result).toEqual(name); //Validate that the returned result is equal to name = "David"
    
        });
    });
    //Test the method getId() of the Employee superclass
    describe("getId", () => {
        it("should return the id of the intern using the method of the superclass", () =>{ //getId() method of the superclass should return the id of the intern object
            //Define name, id, email and school
            let name = "John";
            let id = "30";
            let email = "john@hotmail.com";
            let school = "University 3"
            const intern = new Intern(name, id, email, school); //Create an intern object with defined name, id, email and school
            const result = intern.getId(); //Use getId() method to get the id property of the intern object
            expect(result).toEqual(id); //Validate that the returned result is equal to id = "30"
    
        });
    });
    //Test the method getEmail() of the Employee superclass
    describe("getEmail", () => {
        it("should return the email of the intern using the method of the superclass", () =>{ //getEmail() method of the superclass should return the email of the intern object
            //Define name, id, email and school
            let name = "Marcus";
            let id = "50";
            let email = "marcus@hotmail.com";
            let school = "University 4"
            const intern = new Intern(name, id, email, school); //Create an intern object with defined name, id, email and school
            const result = intern.getEmail(); //Use getEmail() method to get the email property of the intern object
            expect(result).toEqual(email); //Validate that the returned result is equal to email = "marcus@hotmail.com"
    
        });
    });
    //Test the method getSchool() of the Intern class
    describe("getSchool", () => {
        it("should return the School of the intern", () =>{ //getGithub() method should return the school of the intern object
            //Define name, id, email and school
            let name = "Jessica";
            let id = "7";
            let email = "jessica@hotmail.com";
            let school = "University 5"
            const intern = new Intern(name, id, email, school); //Create an intern object with defined name, id, email and school
            const result = intern.getSchool(); //Use getSchool() method to get the School property of the intern object
            expect(result).toEqual(school); //Validate that the returned result is equal to school = "University 5"
    
        });
    });
    //Test the method getRole() of the Intern class
    describe("getRole", () => {
        it("should return the role equal to Intern", () =>{ //getRole() method should return "Intern"
            //Define name, id, email and school
            let name = "Martin";
            let id = "10";
            let email = "martin@hotmail.com";
            let school = "University 6"
            const intern = new Intern(name, id, email, school); //Create an intern object with defined name, id, email and school
            const result = intern.getRole(); //Use getRole() method to get the role value from the intern object
            expect(result).toEqual("Intern"); //Validate that the returned result is equal "Intern"
    
        });
    });

});