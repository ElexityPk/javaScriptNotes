// "use strict";
const JavaScript = [
  {
    Topic: "JavaScript Loops",
    Discription:
      "Loops are a quick and easy way to repeatedly perform a series of instructions, and they are typically run a finite number of times.JavaScript has the following types of loops:",
    Types: [
      {
        titel: "for",
        typeDiscription:
          "The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons,followed by one or more statements that will be executed in the loop.",
        syntax: {
          titel: "Basic Syntax",
          code: '<code>for( initialization; condition; FinalExpresion ){ </br> <span style="margin-left: 50px;">statement(s) </span> </br> }</code>',
        },
        components: [
          '<span style="font-weight: 800;">initialization:</span> An expression or variable declaration that is typically used to initialize a counter variable.',
          '<span style="font-weight: 800;">condition:</span>This is the termination condition, which is an expression that\'s evaluated before each pass through the loop.If this expression evaluates to true, then statement is executed.If the expression evaluates to false, execution jumps to the first line of code after the end of the loop.If this statement is omitted, then  always evaluates to true.',
          '<span style="font-weight: 800;">finalexpresion: </span>An expression to be evaluated at the end of each loop iteration. This occurs before the next evaluation of .',
          '<span style="font-weight: 800;">statement:</span>: The statement (or statements) that is executed each time condition evaluates to true.',
        ],
      },
      {
        titel: "while",
        typeDiscription:
          "The while statement creates a loop that executes its internal statement(s) as long as the specified  evaluates to true. The condition is evaluated before executing the statement.",
        syntax: {
          titel: "Basic Syntax",
          code: '<code>for( initialization; condition; FinalExpresion ){ </br> <span style="margin-left: 50px;">statement(s) </span> </br> }</code>',
        },
        components: [
          '<span style="font-weight: 800;">initialization:</span> An expression or variable declaration that is typically used to initialize a counter variable.',
          '<span style="font-weight: 800;">condition:</span>This is the termination condition, which is an expression that\'s evaluated before each pass through the loop.If this expression evaluates to true, then statement is executed.If the expression evaluates to false, execution jumps to the first line of code after the end of the loop.If this statement is omitted, then  always evaluates to true.',
          '<span style="font-weight: 800;">finalexpresion: </span>An expression to be evaluated at the end of each loop iteration. This occurs before the next evaluation of .',
          '<span style="font-weight: 800;">statement:</span>: The statement (or statements) that is executed each time condition evaluates to true.',
        ],
      },
      {
        titel: "do-while",
        typeDiscription:
          "The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons,followed by one or more statements that will be executed in the loop.",
        syntax: {
          titel: "Basic Syntax",
          code: '<code>for( initialization; condition; FinalExpresion ){ </br> <span style="margin-left: 50px;">statement(s) </span> </br> }</code>',
        },
        components: [
          '<span style="font-weight: 800;">initialization:</span> An expression or variable declaration that is typically used to initialize a counter variable.',
          '<span style="font-weight: 800;">condition:</span>This is the termination condition, which is an expression that\'s evaluated before each pass through the loop.If this expression evaluates to true, then statement is executed.If the expression evaluates to false, execution jumps to the first line of code after the end of the loop.If this statement is omitted, then  always evaluates to true.',
          '<span style="font-weight: 800;">finalexpresion: </span>An expression to be evaluated at the end of each loop iteration. This occurs before the next evaluation of .',
          '<span style="font-weight: 800;">statement:</span>: The statement (or statements) that is executed each time condition evaluates to true.',
        ],
      },
      {
        titel: "for-in",
        typeDiscription:
          "The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons,followed by one or more statements that will be executed in the loop.",
        syntax: {
          titel: "Basic Syntax",
          code: '<code>for( initialization; condition; FinalExpresion ){ </br> <span style="margin-left: 50px;">statement(s) </span> </br> }</code>',
        },
        components: [
          '<span style="font-weight: 800;">initialization:</span> An expression or variable declaration that is typically used to initialize a counter variable.',
          '<span style="font-weight: 800;">condition:</span>This is the termination condition, which is an expression that\'s evaluated before each pass through the loop.If this expression evaluates to true, then statement is executed.If the expression evaluates to false, execution jumps to the first line of code after the end of the loop.If this statement is omitted, then  always evaluates to true.',
          '<span style="font-weight: 800;">finalexpresion: </span>An expression to be evaluated at the end of each loop iteration. This occurs before the next evaluation of .',
          '<span style="font-weight: 800;">statement:</span>: The statement (or statements) that is executed each time condition evaluates to true.',
        ],
      },
      {
        titel: "for-of",
        typeDiscription:
          "The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons,followed by one or more statements that will be executed in the loop.",
        syntax: {
          titel: "Basic Syntax",
          code: '<code>for( initialization; condition; FinalExpresion ){ </br> <span style="margin-left: 50px;">statement(s) </span> </br> }</code>',
        },
        components: [
          '<span style="font-weight: 800;">initialization:</span> An expression or variable declaration that is typically used to initialize a counter variable.',
          '<span style="font-weight: 800;">condition:</span>This is the termination condition, which is an expression that\'s evaluated before each pass through the loop.If this expression evaluates to true, then statement is executed.If the expression evaluates to false, execution jumps to the first line of code after the end of the loop.If this statement is omitted, then  always evaluates to true.',
          '<span style="font-weight: 800;">finalexpresion: </span>An expression to be evaluated at the end of each loop iteration. This occurs before the next evaluation of .',
          '<span style="font-weight: 800;">statement:</span>: The statement (or statements) that is executed each time condition evaluates to true.',
        ],
      },
    ],
    Note: {
      titel: "It's important to note that:",
      points: [
        'The <span style="font-weight: 800;">initialization,</span> <span style="font-weight: 800;">condition,</span> And <span style="font-weight: 800;">finalexpresion: </span> in the head of the for loop are optional, but are generally always used.',
        'The head of a for loop typically looks like <code> for (var i = 0; i < maxValue; i++) </code>, where <span style="font-weight: 600;">maxValue</span>  is the maximum value you wish to iterate until.',
      ],
    },
  },
];

const page = document.getElementById("root");

const pageHtml = JavaScript.map((data, index) => {
  return `
    
    <h1 style="text-align: center;">${data.Topic}</h1>
<div style="width: fit-content;margin: 0 auto;padding: 5%;">

    <h3 style="text-align: left;">${data.Topic}</h3>
    <p>${data.Discription}</p>
    Types.map
    <ul>
        <li>for</li>
        <li>while</li>
        <li>do-while</li>
        <li>for in</li>
        <li>for of</li>

    </ul>
    <h4 style="text-align: left;border-bottom: 1px solid #000;padding-bottom: 4px;">for</h4>
    <p>The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by 
        semicolons,</br> followed by one or more statements that will be executed in the loop.</p>
        <h4 style="text-align: left;padding-bottom: 4px;">Basic Syntax</h4>
        <code>for( initialization; condition; FinalExpresion ){ </br>
                                <span style="margin-left: 50px;">   statement(s) </span> </br>
        }</code>
        <h4 style="text-align: left;padding-bottom: 4px;">Components</h4>
        <ul>
            <li style="margin-bottom: 10px;"><span style="font-weight: 800;">initialization:</span> An expression or variable declaration that is typically used to initialize a counter variable.</li>
            <li style="margin-bottom: 10px;"><span style="font-weight: 800;">condition:</span>This is the termination condition, which is an expression that's evaluated before each pass through the loop.
                 If this expression evaluates to true, then statement is executed. 
                 If the expression evaluates to false, execution jumps to the first line of code after the end of the loop.
                  If this statement is omitted, then  always evaluates to true. </li>
            <li style="margin-bottom: 10px;"><span style="font-weight: 800;">finalexpresion: </span>An expression to be evaluated at the end of each loop iteration. This occurs before the next evaluation of .</li>
            <li style="margin-bottom: 10px;"><span style="font-weight: 800;">statement:</span>: The statement (or statements) that is executed each time condition evaluates to true.</li>
        </ul>
        <p>It's important to note that:</p>
        <ul>
            <li style="margin-bottom: 10px;">The <span style="font-weight: 800;">initialization,</span> <span style="font-weight: 800;">condition,</span> And <span style="font-weight: 800;">finalexpresion: </span> in the head of the for loop are optional, but are generally always used.</li>
            <li style="margin-bottom: 10px;">The head of a for loop typically looks like <code> for (var i = 0; i < maxValue; i++) </code>, where <span style="font-weight: 600;">maxValue</span>  is the maximum value you wish to iterate until. </li>
        </ul>
    </div>
    
    
    `;
});

function javascriptloops(s) {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelsInS = "";
  let consonantsInS = "";

  for (let i = 0; i < s.length; i++) {
    const char = s[i].toLowerCase();

    if (vowels.includes(char)) {
      vowelsInS += char + "\n";
    } else {
      consonantsInS += char + "\n";
    }
  }

  console.log(vowelsInS + consonantsInS);
}
javascriptloops("javascriptloops");

function TotalCostOfMeal(meal_cost, tip_percent, tax_percent) {
  let tip = (meal_cost / 100) * tip_percent;
  let tax = (meal_cost / 100) * tax_percent;

  let totalCost = Math.round(meal_cost + tip + tax);

  console.log(tip);
  console.log(tax);
  console.log(totalCost);
}
TotalCostOfMeal(12, 20, 8);

// ###############    SwitchCase    ##################

function SwitchCase(s) {
  let outPutValue;

  switch (s.charAt(0)) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      outPutValue = "A";
      console.log(outPutValue);
      break;

    case "b":
    case "c":
    case "d":
    case "f":
    case "g":
      outPutValue = "B";
      console.log(outPutValue);
      break;

    case "h":
    case "j":
    case "k":
    case "l":
    case "m":
      outPutValue = "C";
      console.log(outPutValue);
      break;

    case "n":
    case "p":
    case "q":
    case "r":
    case "s":
    case "t":
    case "v":
    case "w":
    case "x":
    case "y":
    case "z":
      outPutValue = "D";
      console.log(outPutValue);
      break;
    default:
      outPutValue = "E";
      console.log(outPutValue);
  }
  return outPutValue;
  console.log(outPutValue);
}
SwitchCase("abdul");
console.log("Abdul Wahab Awan");

// ###############    FindSecondLargestNum    ##################
// ###############    FindSecondLargestNum    ##################
// ###############    FindSecondLargestNum    ##################

// function SecondLargstNum(nums){
//   nums.sort()

//   let secondLargestNum = nums.length - 2
//   console.log(secondLargestNum)
//   console.log(nums)
// }

// SecondLargstNum([2,3,6,6,5])

function getSecondLargest(nums) {
  // Complete the function
  nums.sort(function sort(a, b) {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
  });

  for (let i = nums.length - 1; ; i--) {
    if (nums[i] != nums[i - 1]) {
      return nums[i - 1];
    }
    console.log(nums[i - 1]);
  }
}
getSecondLargest([2, 3, 6, 6, 5]);
/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
  try {
    s = s.split("").reverse().join("");
  } catch (e) {
    console.log(e.message);
  } finally {
    console.log(s);
  }
}
reverseString("1234");
// ###############    Area_Of_Rectangle    ##################
console.log("// ###############    Area_Of_Rectangle    ##################");

function Rectangle(a, b) {
  const object = {
    length: a,
    width: b,
    perimeter: 2 * (a + b),
    area: a * b,
  };
  console.log(`Length => ${object.length}`);
  console.log(`Width => ${object.width}`);
  console.log(`Perimeter => ${object.perimeter}`);
  console.log(`Area => ${object.area}`);
  return object;
}

Rectangle(699, 237);

// ###############   End_Of_Area_Of_Rectangle    ##################

// ###############    Array_Or_Object_Iterating    ##################

console.log(
  "// ###############    Array_Or_Object_Iterating    ##################"
);

function Array_Or_Object_Iterating(objects) {
  let count = 0;

  for (let i = 0; i < objects.length; i++) {
    if (objects[i].x === objects[i].y) {
      count++;
    }
  }
  return count;
}

const objects = [
  { X: 1, Y: 1 },
  { X: 2, Y: 3 },
  { X: 3, Y: 3 },
  { X: 3, Y: 4 },
  { X: 4, Y: 5 },
];

console.log(Array_Or_Object_Iterating(objects));

// ###############    End_of_Array_Or_Object_Iterating    ##################

// Classes In JavaScript

// ###############    Polygon_Class    ##################

console.log("// ###############    Polygon_Class    ##################");

class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  perimeter() {
    return this.sides.reduce((sum, side) => {
      return sum + side;
    }, 0);
  }
}

const polygon = new Polygon([3, 4, 5]);

console.log(polygon.perimeter());

// ###############    End_Of_Polygon_Class    ##################

// ###############    Functional_Classes    ##################

console.log("// ###############    Functional_Classes    ##################");

function Fruit(type) {
  this.type = type;
  this.color = "unKnown";
  this.getInformation = getFruitInformation;
}
function getFruitInformation() {
  return "This " + this.type + " is " + this.color + ".";
}

let lime = new Fruit("Mexican lime");
console.log(lime.getInformation());
lime.color = "green";
console.log(lime.getInformation());

// We can also define the getInformation function internally

function Cars(type) {
  this.type = type;
  this.color = "unKnown";
  this.carInformation = function () {
    return "Car: " + this.type + " color: " + this.color + ".";
  };
}
let Car = new Cars("Honda");
console.log(Car.carInformation());

Car.color = "We can also define the carInformation function internally";
console.log(Car.carInformation());

// we can add a function to our constructor function's prototype like so:
console.log(
  "// we can add a function to our constructor function's prototype like so: "
);
function Prototype(type) {
  this.type = type;
  this.name = "";
  this.maker = "";
  this.model = "";
}
Prototype.prototype.carInfo = function () {
  return (
    "Type:  " +
    this.type +
    "\n" +
    "Name: " +
    this.name +
    "\n" +
    "Maker: " +
    this.maker +
    "\n" +
    "Model: " +
    this.model
  );
};

let Vehical = new Prototype("Car");
console.log(Vehical.carInfo());
Vehical.maker = "Honda";
Vehical.model = "2023";
Vehical.name = " Civic";
console.log(Vehical.carInfo());

// ###############    Using_Object_Literals    ##################

console.log(
  "// ###############    Using_Object_Literals    ##################"
);
let profile = {
  name: " Enter your name. ",
  age: " Enter your age. ",
  gender: " Select gender.",
  phone: " Enter your mobile number.",
  email: " Enter your Email.",
  city: "Enter your city name.",
  getProfileInfo: function () {
    return (
      "Name:" +
      this.name +
      "\n" +
      "Age:" +
      this.age +
      "\n" +
      "Gender:" +
      this.gender +
      "\n" +
      "Phone:" +
      this.phone +
      "\n" +
      "City: " +
      this.city +
      "\n" +
      "Email:" +
      this.email
    );
  },
};
console.log(profile.getProfileInfo());
profile.age = "34 Years";
profile.phone = "+92 3219424726";
profile.name = "Abdul Wahab Awan";
profile.gender = "male";
profile.city = "Lahore";
profile.email = "alvilahori@gmail.com";
console.log(profile.getProfileInfo());

// ###############    End_Of_Using_Object_Literals    ##################

// ###############    Singgleton_Class_Using_A_Function    ##################
console.log(
  "// ###############    Singgleton_Class_Using_A_Function    ##################"
);

let prof = new (function () {
  this.firstNmae = "Abdul Wahab";
  this.lastName = "Awan";
  this.number = "+92 321-9424-726";
  this.getProf = function () {
    return (
      "Frist Name:" +
      this.firstNmae +
      "\n" +
      "Last Name:" +
      this.lastName +
      "\n" +
      "Mobile:" +
      this.number
    );
  };
})();
console.log(prof.getProf());

prof.number = "+92 321-9424-726";
prof.lastName = "Alvi";
prof.number = "+92 321-9424-726";
console.log(prof.getProf());

let fruit = new (function () {
  this.type = "Mexican lime";
  this.color = "green";
  this.getInformation = function () {
    return "This " + this.type + " is " + this.color + ".";
  };
})();

console.log(fruit.getInformation());

fruit.color = "yellow";
console.log(fruit.getInformation());
console.log(
  "// A Singleton class is a design pattern that restrct a class to a single instance."
);

// ###############    End_Of_Singgleton_Class_Using_A_Function    ##################

// ###############    End_Of_Functional_Classes   ##################

// ###############    Static_Methods    ##################

console.log("// ###############    Static_Methods    ##################");

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = b.x - b.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}
const p1 = new Point(19, 5);
const p2 = new Point(29, 10);

// The corect way to call a static method
console.log(Point.distance(p1, p2));

// Attempt to call a static method on an instance of the class
try {
  console.log(p1.distance(p1, p2));
} catch (exception) {
  console.log(exception.name + ": " + exception.message);
}

// ###############    End_Of_Static_Methods    ##################
console.log("hello its first ");

page.innerHTML = pageHtml;
