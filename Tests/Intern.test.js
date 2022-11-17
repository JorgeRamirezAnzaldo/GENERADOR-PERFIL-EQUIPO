const Intern = require("../lib/Intern.js");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with name, id, email and school", () =>{
            let name = "Carl";
            let id = "1";
            let email = "carl@hotmail.com";
            let school = "University 1"
            const intern = new Intern(name, id, email, school);

            expect(intern.name).toEqual(name);
            expect(intern.id).toEqual(id);
            expect(intern.email).toEqual(email);
            expect(intern.School).toEqual(school);
    
        });
    });
    describe("getName", () => {
        it("should return the name of the intern using the method of the superclass", () =>{
            let name = "David";
            let id = "2";
            let email = "david@hotmail.com";
            let school = "University 2"
            const intern = new Intern(name, id, email, school);
            const result = intern.getName();
            expect(result).toEqual(name);
    
        });
    });
    describe("getId", () => {
        it("should return the id of the intern using the method of the superclass", () =>{
            let name = "John";
            let id = "30";
            let email = "john@hotmail.com";
            let school = "University 3"
            const intern = new Intern(name, id, email, school);
            const result = intern.getId();
            expect(result).toEqual(id);
    
        });
    });
    describe("getEmail", () => {
        it("should return the email of the intern using the method of the superclass", () =>{
            let name = "Marcus";
            let id = "50";
            let email = "marcus@hotmail.com";
            let school = "University 4"
            const intern = new Intern(name, id, email, school);
            const result = intern.getEmail();
            expect(result).toEqual(email);
    
        });
    });
    describe("getSchool", () => {
        it("should return the School of the intern", () =>{
            let name = "Jessica";
            let id = "7";
            let email = "jessica@hotmail.com";
            let school = "University 5"
            const intern = new Intern(name, id, email, school);
            const result = intern.getSchool();
            expect(result).toEqual(school);
    
        });
    });
    describe("getRole", () => {
        it("should return the role equal to Intern", () =>{
            let name = "Martin";
            let id = "10";
            let email = "martin@hotmail.com";
            let school = "University 6"
            const intern = new Intern(name, id, email, school);
            const result = intern.getRole();
            expect(result).toEqual("Intern");
    
        });
    });

});