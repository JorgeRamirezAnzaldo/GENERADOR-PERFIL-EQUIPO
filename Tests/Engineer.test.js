const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with name, id, email and GitHub user", () =>{
            let name = "Carl";
            let id = "1";
            let email = "carl@hotmail.com";
            let user = "CarlA";
            const engineer = new Engineer(name, id, email, user);

            expect(engineer.name).toEqual(name);
            expect(engineer.id).toEqual(id);
            expect(engineer.email).toEqual(email);
            expect(engineer.GitHubUser).toEqual(user);
    
        });
    });
    describe("getName", () => {
        it("should return the name of the engineer using the method of the superclass", () =>{
            let name = "David";
            let id = "2";
            let email = "david@hotmail.com";
            let user = "DavidB";
            const engineer = new Engineer(name, id, email, user);
            const result = engineer.getName();
            expect(result).toEqual(name);
    
        });
    });
    describe("getId", () => {
        it("should return the id of the engineer using the method of the superclass", () =>{
            let name = "John";
            let id = "30";
            let email = "john@hotmail.com";
            let user = "JohnC";
            const engineer = new Engineer(name, id, email, user);
            const result = engineer.getId();
            expect(result).toEqual(id);
    
        });
    });
    describe("getEmail", () => {
        it("should return the email of the engineer using the method of the superclass", () =>{
            let name = "Marcus";
            let id = "50";
            let email = "marcus@hotmail.com";
            let user = "MarcusD";
            const engineer = new Engineer(name, id, email, user);
            const result = engineer.getEmail();
            expect(result).toEqual(email);
    
        });
    });
    describe("getGitHubUser", () => {
        it("should return the GitHub user of the engineer", () =>{
            let name = "Jessica";
            let id = "7";
            let email = "jessica@hotmail.com";
            let user = "JessicaE";
            const engineer = new Engineer(name, id, email, user);
            const result = engineer.getGithub();
            expect(result).toEqual(user);
    
        });
    });
    describe("getRole", () => {
        it("should return the role equal to Engineer", () =>{
            let name = "Martin";
            let id = "10";
            let email = "martin@hotmail.com";
            let user = "MartinF";
            const engineer = new Engineer(name, id, email, user);
            const result = engineer.getRole();
            expect(result).toEqual("Engineer");
    
        });
    });

});