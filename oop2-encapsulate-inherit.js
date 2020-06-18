/* 
1. Create the following classes:
    - Book class. It should have an author and publisher property.
    - Author class. It should have a name and books property.
    - Publisher class.  It should have an authors and books property.
    - Review class.  It should have a rating and user property.
    -Prevent the properties from being accessed by outside code, using the encapsulation concept of "private variables".  Create methods that return the values of these private variables in case other pieces of the code need to access the data of the 4 classes.  Also create methods that allow outside code to "set" new values for the properties on the classes, without directly manipulating the values themselves. 

    //your code here...
*/

class Book {
    #author;
    #publisher;

    constructor(author, publisher) {
        this.#author = author;
        this.#publisher = publisher;
    }

    getAuthor() {
        return this.#author;
    }

    getPublisher() {
        return this.#publisher;
    }

    setAuthor(author) {
        this.#author = author;
    }

    setPublisher(publisher) {
        this.#publisher = publisher;
    }
}

class Author {
    #name;
    #books;

    constructor(name, books) {
        this.#name = name;
        this.#books = books;
    }

    getName() {
        return this.#name;
    }

    getBooks() {
        return this.#books;
    }

    setName(name) {
        this.#name = name;
    }

    setBooks(books) {
        this.#books = books;
    }
}

class Publisher {
    #authors;
    #books;

    constructor(authors, books) {
        this.#authors = authors;
        this.#books = books;
    }

    getAuthors() {
        return this.#authors;
    }

    getBooks() {
        return this.#books;
    }

    setAuthors(authors) {
        this.#authors = authors;
    }

    setBooks(books) {
        this.#books = books;
    }
}

class Review {
    #rating;
    #user;

    constructor(rating, user) {
        this.#rating = rating;
        this.#user = user;
    }

    getRating() {
        return this.#rating;
    }

    getUser() {
        return this.#user;
    }

    setRating(rating) {
        this.#rating = rating;
    }

    setUser(user) {
        this.#user = user;
    }
}

/* 
2. Create the following classes:
    - Umbrella class.  It should have a an organization name.  It should only have a single instance.  Umbrella is the "Parent Organization" e.g. Allegis Group
    - Company class. It should have a compnay name and # of employees.  Create at least 3 different companies that are children of the Umbrella Organization.  (e.g. TEKsystems, Aerotek, etc.)
    - Site class. It should have the name of the company, and the location of the site.  It is a child class that inherits from the Company class.  Create 3 sites for each company.
    - Employee class. It should have a employee name, job title, and salary properties. Create 10 employee instances: 1 CEO, 1 Manager, 1 Secretary, 2 Engineers, 1 Financial Officer, 1 Janitor, 1 Marketer, 1 HR Personnel, 1 Lawyer.  Feel free to add other employee roles at your own discretion.
    
    - For each class, add 2 properties and 2 methods to each.  The properties and methods should make sense, considering what the classes are supposed to be representing.

    //your code here...
 */

class Umbrella {

    #organization = "Allegis Group"
    #founded = 1983
    #subsidiaries = 10

    constructor(orgnaization) {
        this.#organization = orgnaization;
    }

    organizationFounded() {
        console.log(`The organization ${this.#organization} was founded in the year ${this.#founded}.`)
    }

    organizationSubsidiaries() {
        console.log(` ${this.#organization} has ${this.#subsidiaries} different subsidiaries.`)
    }
}

class Company extends Umbrella{

    #organization;
    #name;
    #numEmployees;
    #numClients;
    
    constructor(orgnaization, name, numEmployees, numClients) {
        super(orgnaization);
        this.#name = name;
        this.#numEmployees = numEmployees;
        this.#numClients = numClients;
    
    }

    companyExpansion() {
        console.log(`The company ${this.#name} in the organization ${this.#organization} want to expands.`)
    }

    companyComparison() {
        console.log(`The company ${this.#name} has ${this.#numEmployees} employees who manage ${this.#numClients} clients.`)
    }
}

class Site extends Company{

    #name;
    #location;
    #active;
    #tech;

    constructor(name, location, active, tech) {
        super(name);
        this.#name = name;
        this.#location = location;
        this.#active = active;
        this.#tech = tech;
    }

    siteInfo() {
        console.log(`The company ${this.#name} is located in: ${this.#location}.`)
    }
    siteDetails() {
        console.log(`Is the company ${this.#name} still active? ${this.#active}. And is it a tech company? ${this.#tech}.`)
    }
}

class Employee extends Site{

    #name;
    #location;
    #employeeName;
    #job;
    #salary;
    #gender;
    #experience;

    constructor(name, location, employeeName, job, salary) {
        super(name, location);
        this.#employeeName = employeeName;
        this.#job = job;
        this.#salary = salary;
        this.#gender = gender;
        this.#experience = experience;
    }

    employeeInfo(){
        console.log(`${this.#employeeName} is a ${this.#gender} works at ${this.#name} in ${this.#location} as a ${this.#job}.`)
    }

    employeeDetails() {
        console.log(`${this.#employeeName} is a ${this.#job} who has a salary of ${this.#salary} and has ${this.#experience} years of experience.`)
    }
}


const allegis = new Umbrella("Allegis Group");

const teksystems = new Company("Allegis Group", "TEKsystems", 3000, 400)
const aerotek = new Company("Allegis Group", "Aerotek", 1500, 300);
const aston = new Company("Allegis Group", "Aston Carter Group", 1000, 250);

const teksystemsSite = new Site("TEKsystems", "Irving, TX", "Yes", "Yes")
const aerotekSite = new Site("Aerotek", "Hurst, TX", "Yes", "No")
const astonSite = new Site("Aston Carter Group", "Addison, TX", "Yes", "No")

const mark = new Employee("TEKsystems", "Irving, TX", "Mark", "VP", 200000, "Male", "16 years");
const john = new Employee("TEKsystems", "Irving, TX", "John", "Manager", 160000, "Male", "8 years");
const martha = new Employee("TEKsystems", "Irving, TX", "Martha", "Secretary", 80000, "Female", "11 years");
const david = new Employee("Aerotek", "Hurst, TX", "David", "Engineer", 120000, "Male", "6 years");
const samantha = new Employee("Aerotek", "Hurst, TX", "Samantha", "Financial Analyst", 90000, "Female", "7 years");
const alejandro = new Employee("Aerotek", "Hurst, TX", "Alejandro", "Business Analyst", 100000, "Male", "5 years");
const olivia = new Employee("Aerotek", "Hurst, TX", "Olivia", "Marketing Director", 90000, "Female", "9 years");
const emma = new Employee("Aston Carter Group", "Addison, TX", "Emma", "HR", 60000, "Female", "2 years");
const Amelia = new Employee("Aston Carter Group", "Addison, TX", "Amelia", "Lawyer", 120000, "Female", "14 years");
const mia = new Employee("Aston Carter Group", "Addison, TX", "Mia", "Paralegal", 70000, "Female", "4 years")

/****************************************************************************************************************************************************************************************   
Bonus Exercise:

/* 
3. Building on Exercise 1, Do the following : 
- Create a Bookstore class.  It should contain a collection of various Book Instances.
- Each Book Instance should contain the Instances of the relavant Authors, Publishers, and Reviews.
- Each Publisher should contain Instances of the Authors that are affiliated with the relavant Publisher.  

Each Book instance should contain instances of the Authors, the Publishers, and the Reviews pertinent to each book.  This exercise is using the advanced encapsulation concept of "composition", reflecting a "HAS A" relationship.

    //your code here...
 */
