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

    constructor(orgnaization) {
        this.organization = orgnaization
    }
}

class Company {
    
    constructor(name,numEmployees) {
        this.name = name;
        this.numEmployees = numEmployees;
    }
}

class Site {

    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
}

class Employee {

    constructor(employeeName, job, salary) {
        this.employeeName = employeeName;
        this.job = job;
        this.salary = salary;
    }
}

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
