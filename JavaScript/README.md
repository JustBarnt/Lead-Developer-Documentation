<p align="center"><img src="../assets/ddinc-logo-white.svg" style="width: 33vw"></p>

# JavaScript

The JavaScript portion of this documentation will be the most in depth and complicated part of this documentation. I will be including a demo-follow along project going over some basic and more intermediate JavaScript practices. 

This includes: 

1. Vanilla JavaScript
2. NodeJS
3. npm (Node Package Manager)

# Follow along demo project

The demo project for following along is located in the `demo folder`. The video recorded from the meeting I have with Nick Taylor will also show the process in a video format for anyone to follow along with as well. Watching the video will show you how to set the project up to publish in the `dist` folder instead of the `dist-final` folder which is where my project is. 

---
# Table of Contents
>  These 4 sections aren't going to go in depth because that is the goal of the demo. So these sections will cover some general items.
1. Vanilla JavaScript
2. NodeJS
3. npm (Node Package Manager)
4. Webpack

---

## Vanilla JavaScript

<details>
<summary>More Details</summary>
This section will cover some basic ideas behind vanilla JavaScript and general variable typings.
	
What is JavaScript?
>JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based[^1], multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. Read more about JavaScript.
	
### Javascript Basics
	
We are going to over JavaScript basics. This will include variables, functions, and loops.
	
Good beginner resources.
1. [Clean Code JavaScript (GitHub Repo)](https://github.com/ryanmcdermott/clean-code-javascript)
> GitHub repo that goes over how to write clean and good code for other programmers to look at. Really good resource, especially for beginners before habits are formed. (Take it from me personally, I still go back on old habits sometimes.)
2. [You Don't Know JS (GitHub Repo)](https://github.com/getify/You-Dont-Know-JS)
> GitHub repo that contains a free book written by a Kyle Simpson, goes over the basics of JS entirely. He has other books that are written as well as a list of books hes still currently writing. His books are all free, with an option to pay if you feel like it.
	
### Basics
	
These are the basis of JavaScript and programming in general.
	
#### Var vs. Let vs. Const
	
We are going to go over the three ways to declare a variable in JavaScript.
var, let, and const.
	
But first you need to understand scope, so read the definitions on each type of scoping below.[^2]
	
<details>
<summary>Scope Definitions</summary>
<dl>
	
<dt>SCOPE</dt>
<dd>Scope essentially means where these variables are available for use. SCOPE can be defined as GLOBAL, LOCAL, and BLOCK (ES6 and up).</dd>
	
<dt>GLOBAL SCOPE</dt>
<dd>Any variable- var, let, const declared outside a block or function has global access from any script that is accessing it.</dd>
	
<dt>LOCAL SCOPE</dt>
<dd>Any variable declared inside of a function or block. But since those variables are only in the function, it means you can use that same variable name inside a different function without conflicts.</dd>
	
<dt>BLOCK SCOPE</dt>
<dd>let and const are the only variable declarations that can be in a block scope, giving the same access as if it was defined in a function as a LOCAL SCOPE.
	
This is use full for minor tasks where variables are being used for the same thing such as searching a list or the current iteration of loop where the common variable name for iteration is `i`.
</dd>
</dl>
	
</details>
	
#### Let
	
let is now preferred declaration for variables because it is more useful and you can declare variables without worry of overwriting an existing one.
> If you open the variable-declarations.js file you can use quokka to see the real-time output of these examples.
```JavaScript
//VAR DECLARATION
	
var greeter = 'hey hi';
var times = 4;
	
if (times > 3)
	var greeter = 'say Hello instead';
	
console.log(greeter); // say Hello instead
	
//LET Declaration
let greeting = 'say Hi';
if (true)
{
	let greeting = 'say Hello instead';
}
console.log(greeting);// say Hi
```

As you can see, with var the entire variable was re-declared, in an acutal program that could create serious issues that could take a while and many hours of debugging to figure depending how big the program is.
	
But with the `let` example you see that the re-declare isn't logged because it is scoped inside the `if` block, and if there wasn't an if block there, it would create a syntax error because `let` variables cannot be re-declared.
	
#### Const
A constant variable or `const` is a variable that holds a constant value, giving it the name. A `const` cannot be updated or re-declared. This makes `const` useful for variables that will never change their data type.
	
Most often I use `const` for arrays and objects, because its always going to stay and array or object, but the data inside will change.
	
`const` follows the same exact SCOPE rules as `let` so there is not really an example for me to show. But below I will write a quick snippet if you were to try and re-declaring it or update it.
	
``` JavaScript
const name = 'Brent';
name = 'Brett'; // error: cannot update constants.
	
const name = 'Edgar'; //error: cannot re-declare constants.
```

### Data Types
JavaScript has 9 data types, below I will list them all

```JavaScript
let age = 28 						   // Number
let integer = 3.14; 				   // Float
let name = 'brent' 					   // String
let truth = true; 					   // Boolean
let isNull = null; 					   // Null
let empty; 							   // Undefined
let fn = function(){return 'hello'};   // Function
let Person = {name: 'brent', age: 28}; // Object
let ages = [19,20,34,29,30] 		   // Array

```

### Conditionals
Conditionals are blocks of code that are executed based on a condition. Most common conditionals are `if/else` `switch` and `ternary`. I will briefly go over each one and how Null/Undefined are tested.

``` JavaScript
//If/else

if(condition)
{
	//execute code
}
else
{
	//execute code
}


//If/Else If/Else
if(condition1)
{
	//execute code
}
else if(condition2)
{
	//execute code
}
else
{
	//exectute code
}

//Switch Statement
switch(condition)
{
	case condition_1:
		//execute code
		break;
	case condition_2:
		//execute code
		break;

	default
		//execute code
		break;
}

//Ternary Statement
condition == true ? doThisIfTrue : doThisIfFalse; 
	
```

<details>
<summary>If/Else Statements</summary>
If/Else Statements
	
`If/Else` statement is the most used conditional it allows you to evaluate something and run a separate blocks of code based on whether something is `true` or `false`
	
`if/else if/else` is somewhat the same, it just allows you to evaluate more than two conditions, but personally if I need to evaluate more than two items I prefer to use a switch statement for readability.
</details>

<details>
<summary>Switch Statements</summary>
`Switch` statement is a block of code which you pass a condition to evaluate and you then have a `case` which is general a data type. For example Months in a calendar year, you would Jan-Dec as each case.
	
And when the condition matches one of the cases the block of code is ran inside that case.
	
If none of those conditions are met you can set a default clause which will run code, this would normally be some kind of log or something to indicate an error.
</details>

<details>
<summary>Ternary Operator</summary>
`Ternary` Operator takes 3 operands: a condition followed by a `?` then code to execute if the condition is true followed by `:` and then code to execute if the condition is false. 

Ternary is often used to replace short if statements that only execute one statement on each condition.
</details>

</details>

### Loops
Loops are a quick and easy way to do repetitive tasks

There are 5 types of loops in JavaScript
1. for Loop
2. do... while loop
3. while loop
4. for... in loop
5. for... of loop

#### [For Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)

``` JavaScript

for ([initialExpression]; [conditionExpression]; [incrementExpression])
  statement

//Example
let max = 29;
for(let i = 0; i <= age; i++)
	console.log(`Count is at: ${i}`);
```

<details>
	<summary>For Loop Summary</summary>
When a `for` loop executes, the following occurs:

1. The initializing expression `initialExpression`, if any, is executed. This expression usually initializes one or more loop counters, but the syntax allows an expression of any degree of complexity. This expression can also declare variables.

2. The `conditionExpression` expression is evaluated. If the value of `conditionExpression` is `true`, the loop statements execute. Otherwise, the `for` loop terminates. (If the conditionExpression expression is omitted entirely, the condition is assumed to be `true`. Be careful with this though, because you will create an infinite loop which will crash the application.)

3. The statement executes. To execute multiple statements, use a block statement `({ ... })` to group those statements.

4. If present, the update expression incrementExpression is executed.
   
5. Control returns to Step 2.
</details>

---

#### [Do...While Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#do...while_statement)

``` JavaScript

do
  statement
while (condition);

//Example
let count = 20;

do {
	console.log(`Countdown till blast off: ${count}`);
	count--;
}while(count > -1)
```

<details>
<summary> Do...While Loop Summary</summary>

`statement` is always executed once before the condition is checked. (To execute multiple statements, use a block statement `({ ... })` to group those statements.)

If `condition` is `true`, the `statement` executes again. At the end of every execution, the `condition` is checked. When the `condition` is false, execution stops, and control passes to the statement following `do...while`.
</details>

---

#### [While Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#while_statement)

``` JavaScript

while (condition)
  statement

//Example
let count = 20;

while(count > 0)
{
	console.log(`Countdown till blast off: ${count}`);
	count--;
}
```

<details>
<summary>While Loop Summary</summary>

If the `condition` becomes `false`, `statement` within the loop stops executing and control passes to the `statement` following the loop.

The condition test occurs before `statement` in the loop is executed. If the condition returns true, `statement` is executed and the condition is tested again. If the `condition` returns `false`, execution stops, and control is passed to the `statement` following `while`.

To execute multiple `statements`, use a block statement `({ ... })` to group those `statements`.
</details>

---

#### [For...In Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...in_statement)

``` JavaScript

for (variable in object)
  statement

//Example
let count = 20;
const Car = {make: 'Ford', model: 'Mustang'}

function dump_props(obj, obj_name) {
	let result = '';

	for (let i in obj) {
		result += obj_name + '.' + i + ' = ' + obj[i] + '<br>';
	}

  	result += '<hr>';
  	return result;
}
console.log(dump_props(Car, 'Car'));

/* output
Car.make = Ford
Car.model = Mustang
*/
```
<details>
<summary>For...In Loop Summary</summary>

The `for...in` statement iterates a specified variable over all the enumerable properties of an object. For each distinct property, JavaScript executes the specified statements. A `for...in` statement looks as follows:
</details>

---

#### [For...Of Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...in_statement)

``` JavaScript

for (variable of object)
  statement

//Example
const arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs 3, 5, 7
}
```
<details>
<summary>For...Of Loop Summary</summary>

The `for...of` statement creates a loop Iterating over iterable objects (including `Array`, `Map`, `Set`, `arguments` object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.
</details>

----

[^1]: [Prototype-based programming](https://developer.mozilla.org/en-US/docs/Glossary/Prototype-based_programming) is a style of object-oriented programming in which classes are not explicitly defined, but rather derived by adding properties and methods to an instance of another class or, less frequently, adding them to an empty object.
[^2]: Objects and Functions are also variables. If you do not assign an object or function to a variable, it will become GLOBALLY SCOPED. Which most cases isn't really an issue.

## NodeJS

### What is NodeJS?
>As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.

I use NodeJS to use Node Package Manager (npm). Which allows to me download libraries for the projects I use.

There are several different versions of nodeJS. I recommend installing the LTS (Long Term Support) version [here](https://nodejs.org/en/download/). 

I won't go to much more into NodeJS because we have never used NodeJS to create Node Applications for any client.

### Node Package Manager (npm)
Node Package Manager or npm is a Command-Line tool that comes with NodeJS. It used to install packages into your projects. 

Install
```bash session
npm install [packagename] #installs the package as a dependency
npm install --save-dev [packagename] #installs the package as a dev dependency

#shorthand

#flags -S is the same --save and -D is the same as Dev
# -G is global this means the package will be installed in your global folder where nodeJS is installed compared to the project folder.

#--save-dev can be done with -S -D

# install
npm i <package>

# uninstall
npm un <package>

# update
npm up <package>
```
