//1. Create a Class called WhyClass.  This class should have one property, and two methods.  THe property is called "purpose", and stores a string.  This string should clearly explain why classes are used in Object Oriented Programming.  The first method is called explain().  This method should print the contents stored in the purpose 'field' of the class.  The second method is called pieces().  This 2nd method should print out the various parts that are essential to building a class.  Instantiate the class, and invoke the method so the results are showing in the console once this file is run.

//your code here...

class WhyClass {
  constructor(purpose) {
    this.purpose =
      'Classes are the blueprints used to create objects, provide initial values for states, and implementations of behavior';
  }

  explain() {
    console.log(this.purpose);
  }

  pieces() {
    console.log(
      'constructors, objects (like properties and methods), the this keyword, and the new keyword'
    );
  }
}

const NewClass = new WhyClass();
NewClass.explain();
NewClass.pieces();

/*2. You are exploring the rainforests of the Amazon.  You have observed many different types of wildlife on your excursion.  To jog your memory, some different types of wildlife that you observed are found in the following URL : https://www.ietravel.com/blog/amazon-rainforest-animals-beginners-guide-21-species.  Feel free to use other resources online if you wish.

Create a class that can categorize at least 6 of the creatures that you recall observing the Amazon.  Each creature should have 3 unique characteristics, and 2 unique actions that it can do. */

//your code here...

class Amazon {
  constructor(name, classification, color, actions) {
    this.name = name;
    this.classification = classification;
    this.color = color;
    this.actions = actions;
  }
  z;

  about() {
    console.log(`One of the many animals in the Amazon rainforests is the ${this.name}, a ${this.color}-colored ${this.classification}.`);
  }

  actions() {
    console.log(`One unique action the ${this.name} can do is ${this.actions[0]} while another is ${this.actions[1]}.`);
  }
}

const dolphin = new Amazon('Amazon River Dolphin', 'mammal', 'pink', ["move its' neck left and right", 'feed on small fish, crabs, and turtles']);
const capybara = new Amazon('Capybara', 'mammal', 'brown', ['eat up to 8 pounds of grass per day', 'reside near the swampy areas']);
const jaguar = new Amazon('Jaguar', 'mammal', 'yellow', ['swim', 'climb trees']);
const owl = new Amazon('Spectacled Owl', 'bird', 'dark', ['stay active at night', 'hunt by swooping down from their roost']);
const toucan = new Amazon('Toco Toucan', 'bird', 'black and white', ['look awkward while it flies', 'socialize with other toucans']);
const caiman = new Amazon('Black Caiman', 'reptile', 'darl', ['hunt any land-based or river-dwelling animal', 'even attack Pumas or Jaguars']);

dolphin.about();
owl.actions();

/*3. Convert the following Object Literals into a general class called Shape, and instantiate the class to generate the object literals
 */

class Shape {
    constructor(name, sides, base, height, length, width, radius) {
        this.name = name;
        this.sides = sides;
        this.base = base;
        this.height = height;
        this.length = length;
        this.width = width;
        this.radius = radius;
    }


    calcHeight() {
        if (this.name === 'triangle') {
            return Math.sqrt(Math.pow(this.sides[1], 2) - Math.pow(this.base, 2)).toFixed(2);
        };
    }

    calcArea() {
        if (this.name === 'triangle'){
            console.log(`The area of a ${this.name} is ${.5 * this.base * this.height}.`);
        }
        else if (this.name === 'rectangle') {
            console.log(`The area of a ${this.name} is ${this.length * this.width}.`)
        }
        else if (this.name === 'circle'){
            console.log(`This area of a ${this.name} is ${(Math.PI * Math.pow(this.radius, 2)).toFixed(2)}`)
        }
    }

    calcPerimeter() {
        if (this.name === 'triangle') {
            console.log(`The perimeter of a ${this.name} is ${(this.base) + (this.sides[1]) + this.sides[2]}`)
        }
        else if (this.name === 'rectangle') {
            console.log(`The perimeter of a ${this.name} is ${(this.length * 2) + (this.width * 2)}`)
        }
    }

    calcCircumference() {
        if (this.name === 'circle') {
            console.log(`The circumference of a ${this.name} is ${(Math.PI * this.radius * 2).toFixed(2)}`)
        }
    }
}


const newTriangle = new Shape("triangle", [4,7,7], null, null, null, null, null);
newTriangle.base = newTriangle.sides[0];
newTriangle.height = newTriangle.calcHeight();

console.log(newTriangle)
newTriangle.calcArea()
newTriangle.calcPerimeter()

const newRectangle = new Shape ('rectangle', 4, null, null, 2, 5, null);

console.log(newRectangle)
newRectangle.calcArea()
newRectangle.calcPerimeter()

const newCircle = new Shape('circle', 1, null, null, null, null, 5);

console.log(newCircle)
newCircle.calcArea()
newCircle.calcCircumference()



const triangle = {
  name: 'triangle',
  sides: [4, 7, 7], //lengths of each side
  base: null,
  height: null, //determine this height using basic geometry.  You may need to research this one.
  calcArea: function () {
    console.log(`${this.name}'s area is calculated to be : ${0.5 * this.base * this.height}`);
  },
  calcPerimeter: function () {
    console.log(`${this.name}'s perimeter is calculated to be : ${this.base + (this.sides[1] + this.sides[2]) }`);
  },
};


triangle.base = triangle.sides[0]; //base is the 1st side in the triangle.sides array.
triangle.height = 6.71; //determine the height using basic geometry.  How do you calculate the height of a triangle with 2 equal sides?  If you use the formula to caluclate the height, this is a bonus.  If you hard code the correct value here, that will be sufficient, but no bonus :(

console.log(triangle);
triangle.calcArea();
triangle.calcPerimeter();


const rectangle = {
  name: 'rectangle',
  sides: 4,
  length: 2,
  width: 5,
  calcArea: function () {
    console.log(`${this.name}'s area is calculated to be : ${this.length * this.width}`);
  },
  calcPerimeter: function () {
    console.log(`${this.name}'s perimeter is calculated to be : ${2 * this.length + 2 * this.width}`);
  },
};

console.log(rectangle);
rectangle.calcArea();
rectangle.calcPerimeter();


const newCircle = new Shape("circle")

const circle = {
  name: 'circle',
  sides: 1,
  radius: 5,
  calcArea: function () {
    console.log(`${this.name}'s area is calculated to be : ${(Math.PI * this.radius ** 2).toFixed(2)}`);
  },
  calcCircumference: function () {
    console.log(`${this.name}'s circumference is calculated to be : ${(2 * Math.PI * this.radius).toFixed(2)}`);
  },
};

console.log(circle);
circle.calcCircumference();
circle.calcArea();

/*********************************************** 
Bonus Exercises:

*/

//4. Create three more instances of the Shape class for a pentagon, hexagon, and an octagon.  Add in  comments explaining the formulas for calculating the perimeter and the areas of these 3 shapes.  Also, as noted above, if you use the formula to calculate the height of the triangle instead of hard coding it, you will also obtain the bonus for this exercise.  The dimensions for the triangle are already provided for you in the triangle object literal.
class Shape {
  constructor(name, sides, base, height, length, width, radius) {
      this.name = name;
      this.sides = sides;
      this.base = base;
      this.height = height;
      this.length = length;
      this.width = width;
      this.radius = radius;
  }

  calcArea() {
    if (this.name === 'heptagon') {
        console.log(`The area of a ${this.name} is ${((1/4) * Math.sqrt((5 * (5 + (2 * Math.sqrt(5))))) * Math.pow(this.length, 2)).toFixed(2)}.`);
    }
    else if (this.name === 'hexagon') {
        console.log(`The area of a ${this.name} is ${(((3 * Math.sqrt(3)) / 2) * Math.pow(this.length, 2)).toFixed(2)}.`)
    }
    else if (this.name === 'octagon'){
        console.log(`This area of a ${this.name} is ${(2 * (1 + Math.sqrt(2)) * Math.pow(this.length, 2)).toFixed(2)}`)
    }
  }

calcPerimeter() {
    if (this.name === 'heptagon') {
        console.log(`The perimeter of a ${this.name} is ${5 * this.length}`)
    }
    else if (this.name === 'hexagon') {
        console.log(`The perimeter of a ${this.name} is ${6 * this.length}`)
    }
    else if (this.name === 'octagon') {
      console.log(`The perimeter of a ${this.name} is ${8 * this.length}`)
    }
  }
}


const newPentagon = new Shape ('pentagon', 5, null, null, 3, null, null);

console.log(newPentagon)
newPentagon.calcArea()
newPentagon.calcPerimeter()

const newHexagon = new Shape ('hexagon', 6, null, null, 3, null, null);

console.log(newHexagon)
newHexagon.calcArea()
newHexagon.calcPerimeter()

const newOctagon = new Shape ('octagon', 6, null, null, 3, null, null);

console.log(newOctagon)
newOctagon.calcArea()
newOctagon.calcPerimeter()


const pentagon = {
  name: 'pentagon',
  sides: 5,
  length: 3,
  calcArea: function () {
    console.log(`${this.name}'s area is calculated to be : ${((1/4) * Math.sqrt((5 * (5 + (2 * Math.sqrt(5))))) * Math.pow(this.length, 2)).toFixed(2)}`);
  },
  calcPerimeter: function () {
    console.log(`${this.name}'s perimeter is calculated to be : ${5 * this.length}`);
  },
};

console.log(pentagon);
pentagon.calcArea();
pentagon.calcPerimeter();


const hexagon = {
  name: 'hexagon',
  sides: 6,
  length: 3,
  calcArea: function () {
    console.log(`${this.name}'s area is calculated to be : ${(((3 * Math.sqrt(3)) / 2) * Math.pow(this.length, 2)).toFixed(2)}`);
  },
  calcPerimeter: function () {
    console.log(`${this.name}'s perimeter is calculated to be : ${5 * this.length}`);
  },
};

console.log(hexagon);
hexagon.calcArea();
hexagon.calcPerimeter();

const octagon = {
  name: 'octagon',
  sides: 8,
  length: 3,
  calcArea: function () {
    console.log(`${this.name}'s area is calculated to be : ${(2 * (1 + Math.sqrt(2)) * Math.pow(this.length, 2)).toFixed(2)}`);
  },
  calcPerimeter: function () {
    console.log(`${this.name}'s perimeter is calculated to be : ${5 * this.length}`);
  },
};

console.log(octagon);
octagon.calcArea();
octagon.calcPerimeter();


/*
//5. Below is a class Earth.  It is instantiated with a earth 'instance'.  Because there is only 1 known earth, we don't want multiple instances of earth.  Modify the class so the properties are usuable WITHOUT instantiating the class.

*/


class Earth {
  name;
  planetNum; //distance from the sun.  1-mercury, 2-venus, 3-earth, ...

  constructor(name, num) {
    this.name = name;
    this.planetNum = num;
  }
}

/*
const earth = new Earth('earth', 3);
console.log(earth);
*/

const earth = {name: 'earth', planetNum: 3}
console.log(earth)
