const mongoose = require('mongoose');

const mcqSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  options: {
    type: [String],
    required: true
  },
  correctAnswerIndex: {
    type: Number,
    required: true,
    min: 0,
    max: 3
  }
});

const MCQ = mongoose.model('MCQ', mcqSchema);

module.exports = MCQ;

// // MCQs for React
// const reactMCQs = [
//   {
//     topic: "React",
//     question: "What does React use to render components to the DOM?",
//     options: ["ReactDOM.render()", "React.render()", "document.render()", "render()"],
//     correctAnswerIndex: 0
//   },
//   {
//     topic: "React",
//     question: "In React, which method is used to change the state of a component?",
//     options: ["this.state()","setState()", "changeState()", "updateState()"],
//     correctAnswerIndex: 1
//   },
//   {
//     topic: "React",
//     question: "What is JSX?",
//     options: [ "JavaScript syntax extension", "JavaScript & XML", "Java XML","JavaScript XML"],
//     correctAnswerIndex: 3
//   },
//   {
//     topic: "React",
//     question: "What is a prop in React?",
//     options: ["Data passed from parent to child component", "A function that returns a React element", "A child component", "A state variable"],
//     correctAnswerIndex: 0
//   },
//   {
//     topic: "React",
//     question: "What lifecycle method is invoked immediately after a component is mounted?",
//     options: [ "componentWillMount()", "componentDidMount()","componentDidUpdate()", "componentWillUnmount()"],
//     correctAnswerIndex: 2
//   },
//   {
//     topic: "React",
//     question: "What is the purpose of keys in React lists?",
//     options: ["Keys provide a unique identifier for each child in a list","Keys help React identify which items have changed, are added, or are removed", "Keys are used to filter items in a list", "Keys are used for styling list items"],
//     correctAnswerIndex: 1
//   },
//   {
//     topic: "React",
//     question: "What is the React context API used for?",
//     options: ["To pass data through the component tree without having to pass props down manually at every level", "To access DOM elements directly in React components", "To handle form submissions in React", "To manage global state in React"],
//     correctAnswerIndex: 0
//   },
//   {
//     topic: "React",
//     question: "What is a higher-order component (HOC) in React?",
//     options: ["A function that takes a component and returns a new component", "A component with a higher render priority", "A component that renders other components", "A component with state"],
//     correctAnswerIndex: 0
//   },
//   {
//     topic: "React",
//     question: "How do you create a controlled component in React?",
//     options: [ "By using setState() inside the render method", "By using refs", "By binding event handlers to input elements","By using controlled components, where form data is handled by React"],
//     correctAnswerIndex: 2
//   },
//   {
//     topic: "React",
//     question: "What does React.Fragment do?",
//     options: [ "It creates a new component", "It allows you to use fragments of HTML code in JSX", "It fragments the component's state","It allows you to group multiple elements without adding extra nodes to the DOM"],
//     correctAnswerIndex: 0
//   }
// ];

// // MCQs for JavaScript
// const javascriptMCQs = [
//   {
//     topic: "JavaScript",
//     question: "What is the result of the expression typeof null?",
//     options: [ "null","object", "undefined", "number"],
//     correctAnswerIndex: 1
//   },
//   {
//     topic: "JavaScript",
//     question: "What will be logged to the console? var x = 1; if (function f() {}) { x += typeof f; } console.log(x);",
//     options: ["1", "1undefined", "1function", "1string"],
//     correctAnswerIndex: 1
//   },
//   {
//     topic: "JavaScript",
//     question: "What is a closure in JavaScript?",
//     options: ["A function that has access to the parent scope, even after the parent function has closed", "A function with no parameters", "A function that takes another function as an argument", "A function that returns an object"],
//     correctAnswerIndex: 0
//   },
//   {
//     topic: "JavaScript",
//     question: "What is the output of the following code? console.log(1 + '2' + '2'); console.log(1 + +'2' + '2'); console.log(1 + -'1' + '2'); console.log(+'1' + '1' + '2');",
//     options: [ "122, 32, 12, 112", "122, 32, 22, 112","122, 32, 02, 112", "122, 122, 122, 122"],
//     correctAnswerIndex: 2
//   },
//   {
//     topic: "JavaScript",
//     question: "What will be logged to the console? var a = [1, 2, 3]; var b = [1, 2, 3]; console.log(a == b); console.log(a === b);",
//     options: ["true, false", "false, true", "false, false","true, true"],
//     correctAnswerIndex: 3
//   },
//   {
//     topic: "JavaScript",
//     question: "What is the result of 0.1 + 0.2 === 0.3 in JavaScript?",
//     options: ["false", "true", "NaN", "undefined"],
//     correctAnswerIndex: 0
//   },
//   {
//     topic: "JavaScript",
//     question: "What is the purpose of the let keyword in JavaScript?",
//     options: ["To declare a variable with function scope", "To declare a variable with block scope", "To declare a constant variable", "To declare a variable with global scope"],
//     correctAnswerIndex: 1
//   },
//   {
//     topic: "JavaScript",
//     question: "What will the following code output? console.log(typeof typeof 1);",
//     options: ["number", "string", "object", "undefined"],
//     correctAnswerIndex: 1
//   },
//   {
//     topic: "JavaScript",
//     question: "What is the JavaScript operator used for string concatenation?",
//     options: ["&", "+=","+",  "||"],
//     correctAnswerIndex: 2
//   },
//   {
//     topic: "JavaScript",
//     question: "What is the output of the following code? var x = 0; function foo() { x++; this.x = x; return foo; } var bar = new new foo; console.log(bar.x);",
//     options: ["0", "1", "undefined", "NaN"],
//     correctAnswerIndex: 2
//   }
// ];

// // MCQs for HTML
// const htmlMCQs = [
//   {
//     topic: "HTML",
//     question: "What does HTML stand for?",
//     options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyperlink Text Markup Language"],
//     correctAnswerIndex: 0
//   },
//   {
//     topic: "HTML",
//     question: "Which HTML element is used to define a hyperlink?",
//     options: [ "<link>","<a>", "<h1>", "<p>"],
//     correctAnswerIndex: 1
//   },
//   {
//     topic: "HTML",
//     question: "What does the <img> element define?",
//     options: [ "A paragraph","An image", "A link", "A heading"],
//     correctAnswerIndex: 1
//   },
//   {
//     topic: "HTML",
//     question: "Which HTML element is used to define the structure of an HTML document, including the title and meta information?",
//     options: [ "<body>", "<html>","<head>", "<title>"],
//     correctAnswerIndex: 2
//   },
//   {
//     topic: "HTML",
//     question: "What is the correct HTML for creating a checkbox?",
//     options: ["<input type='checkbox'>", "<check>", "<checkbox>", "<box>"],
//     correctAnswerIndex: 0
//   },
//   {
//     topic: "HTML",
//     question: "What is the purpose of the <meta> tag in HTML?",
//     options: ["To provide metadata about the HTML document", "To define a hyperlink", "To create a new paragraph", "To insert an image"],
//     correctAnswerIndex: 0
//   },
//   {
//     topic: "HTML",
//     question: "Which attribute specifies the URL of the page the link goes to?",
//     options: [ "src", "link", "url","href",],
//     correctAnswerIndex: 3
//   },
//   {
//     topic: "HTML",
//     question: "Which HTML element is used to define an unordered list?",
//     options: [ "<ol>", "<li>", "<u>","<ul>",],
//     correctAnswerIndex: 3
//   },
//   {
//     topic: "HTML",
//     question: "What is the purpose of the <style> element in HTML?",
//     options: [ "To create a new paragraph","To define CSS styles for an HTML document", "To insert JavaScript code", "To define a hyperlink"],
//     correctAnswerIndex: 1
//   },
//   {
//     topic: "HTML",
//     question: "What does the HTML <form> element do?",
//     options: [ "It creates a link to another webpage", "It defines a list of items","It defines an HTML form for user input", "It defines a section in an HTML document"],
//     correctAnswerIndex: 2
//   }
// ];

// // MCQs for CSS
// const cssMCQs = [
//   {
//     topic: "CSS",
//     question: "What does CSS stand for?",
//     options: [ "Creative Style Sheets", "Computer Style Sheets", "Cascading Style Sheets","Color"],
//     correctAnswerIndex: 2
//   },
//   {
//     topic: "CSS",
//     question: "What is the result of `0.1 + 0.2 === 0.3` in JavaScript?",
//     options: [ "true", "NaN","false", "undefined"],
//     correctAnswerIndex: 2
//   },
//   {
//     topic: "CSS",
//     question: "What is the purpose of the `let` keyword in JavaScript?",
//     options: [ "To declare a variable with function scope", "To declare a constant variable", "To declare a variable with global scope","To declare a variable with block scope"],
//     correctAnswerIndex: 3
//   },
//   {
//     topic: "CSS",
//     question: "What will the following code output? console.log(typeof typeof 1);",
//     options: ["number", "string", "object", "undefined"],
//     correctAnswerIndex: 1
//   },
//   {
//     topic: "CSS",
//     question: "What is the JavaScript operator used for string concatenation?",
//     options: ["+", "&", "+=", "||"],
//     correctAnswerIndex: 0
//   },
//   {
//     topic: "CSS",
//     question: "What is the output of the following code? var x = 0; function foo() { x++; this.x = x; return foo; } var bar = new new foo; console.log(bar.x);",
//     options: ["0", "1", "undefined", "NaN"],
//     correctAnswerIndex: 2
//   },
//   {
//     topic: "CSS",
//     question: "Which CSS property is used to change the background color?",
//     options: ["background-color", "color", "bgcolor", "background"],
//     correctAnswerIndex: 0
//   },
//   {
//     topic: "CSS",
//     question: "Which CSS property controls the text size?",
//     options: [ "text-size","font-size", "font-style", "text-style"],
//     correctAnswerIndex: 1
//   },
//   {
//     topic: "CSS",
//     question: "What does CSS specificity refer to?",
//     options: [ "It defines the order of precedence for CSS rules", "It determines which CSS rule is applied by the browser","It calculates the size of CSS units", "It controls the visibility of elements"],
//     correctAnswerIndex: 1
//   },
//   {
//     topic: "CSS",
//     question: "What is the purpose of the CSS float property?",
//     options: ["To specify how an element should float", "To set the transparency of an element", "To control the position of an element", "To add shadows to an element"],
//     correctAnswerIndex: 0
//   }
// ];

// // Combine all MCQs
// const allMCQs = [...reactMCQs, ...javascriptMCQs, ...htmlMCQs, ...cssMCQs];

// MCQ.insertMany(allMCQs)
//   .then(() => {
//     console.log('MCQs added successfully');
//   })
//   .catch(err => {
//     console.error('Error adding MCQs:', err);
//   });
