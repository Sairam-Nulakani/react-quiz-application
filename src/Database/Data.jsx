export default [
  {
    id: 1,
    question:
      "What is the difference between 'let', 'var', and 'const' when declaring variables in JavaScript?",
    options: [
      "'let' allows redeclaration, 'var' does not, and 'const' creates a constant value.",
      "'var' allows redeclaration, 'let' does not, and 'const' creates a constant value.",
      "'const' allows redeclaration, 'let' does not, and 'var' creates a constant value.",
      "'var', 'let', and 'const' are interchangeable and can be used interchangeably.",
    ],
  },
  {
    id: 2,
    question: "Explain the concept of 'hoisting' in JavaScript.",
    options: [
      "Hoisting refers to the process of moving variables and function declarations to the top of their containing scope during the compilation phase.",
      "Hoisting is the process of moving the code from a lower-level programming language to a higher-level language.",
      "Hoisting is a feature in JavaScript that allows asynchronous code execution.",
      "Hoisting refers to the process of optimizing the performance of JavaScript code.",
    ],
  },
  {
    id: 3,
    question: "What are the different data types available in JavaScript?",
    options: [
      "String, Number, Boolean, Object, Array, Null, Undefined, Symbol",
      "String, Number, Boolean, Object, Array, Null, Undefined",
      "String, Number, Boolean, Object, Array, Undefined",
      "String, Number, Boolean, Object, Array",
    ],
  },
  {
    id: 4,
    question: "How do you check the type of a variable in JavaScript?",
    options: [
      "Using the 'typeof' operator",
      "Using the 'type' property",
      "Using the 'getType()' function",
      "JavaScript automatically infers variable types, so no explicit check is required.",
    ],
  },
  {
    id: 5,
    question: "What is the 'this' keyword in JavaScript? How does it work?",
    options: [
      "'this' refers to the current executing function or object.",
      "'this' refers to the global object.",
      "'this' refers to the parent function's context.",
      "'this' is not a valid keyword in JavaScript.",
    ],
  },
  {
    id: 6,
    question:
      "Explain the difference between 'undefined' and 'null' in JavaScript.",
    options: [
      "'Undefined' is a value automatically assigned to variables that have been declared but not initialized, while 'null' is an explicitly assigned value that represents the absence of a value.",
      "'Undefined' and 'null' are identical and can be used interchangeably.",
      "'Undefined' is a value explicitly assigned to variables to indicate the absence of a value, while 'null' is a value automatically assigned to variables that have been declared but not initialized.",
      "'Undefined' and 'null' are both used to represent true or false in JavaScript.",
    ],
  },
  {
    id: 7,
    question: "What is the purpose of 'strict mode' in JavaScript?",
    options: [
      "Strict mode enforces a more secure, less error-prone subset of JavaScript.",
      "Strict mode restricts access to external APIs in order to improve security.",
      "Strict mode enables new syntax features introduced in the latest ECMAScript specification.",
      "Strict mode enables 'eval()' functions in JavaScript.",
    ],
  },
  {
    id: 8,
    question: "How does event delegation work in JavaScript?",
    options: [
      "Event delegation is a technique that involves attaching event listeners to individual elements instead of their parent elements.",
      "Event delegation is a technique that involves attaching event listeners to the document object only.",
      "Event delegation is a technique that involves attaching event listeners to the window object.",
      "Event delegation is not supported in JavaScript.",
    ],
  },
  {
    id: 9,
    question: "What is a closure in JavaScript? Provide an example.",
    options: [
      "A closure is a function that has access to the variables from its containing lexical scope, even after the outer function has finished executing.",
      "A closure is an object that encapsulates data and behavior.",
      "A closure is a function that is defined inside another function, but it does not have access to the outer function's variables.",
      "A closure is an error that occurs when a function is not defined properly.",
    ],
  },
  {
    id: 10,
    question:
      "Explain how asynchronous programming works in JavaScript using callbacks and/or Promises.",
    options: [
      "Asynchronous programming in JavaScript allows tasks to be executed in a non-blocking manner by using callbacks or Promises. Callbacks are functions passed as arguments to asynchronous functions and get executed when the task is completed. Promises represent a future value and can be used to handle success and failure scenarios of an asynchronous operation.",
      "Asynchronous programming in JavaScript is not possible.",
      "Asynchronous programming in JavaScript is handled automatically by the browser.",
      "Asynchronous programming in JavaScript is only possible with the 'async/await' syntax.",
    ],
  },
];
