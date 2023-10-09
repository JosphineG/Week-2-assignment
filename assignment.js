// Question 1: Convert to Number Explicitly 

let numberStr = "42";
let number = Number(numberStr);
console.log(number);// outputs 42

// Explanation
// I passed numberStr as an argument to the 'Number ()' function
// The Number () function converted the value to a number and it is then assigned to the "number" variable then output displayed.



// Question 2: Convert to String Explicitly 


let num = 2023;
let string = String(num);
console.log(string);

// Explanation
// I used the String() function to explicitly convert the num variable (which is a number) to a string.outputs 
// "2023" which is a string




// Question 3: Convert to Boolean Explicitly 

let truthyValue = "Hello";
let falsyValue = 0;
let boolTruthy = Boolean(truthyValue);
let boolFalsy = Boolean(falsyValue);
console.log(boolTruthy); // This will output true (a boolean) to the console
console.log(boolFalsy); // This will output false (a boolean) to the console


// Question 4: Convert JavaScript Dates to Numbers 

let currentDate = new Date();
let millisecondsSinceEpoch = currentDate.getTime();
console.log(millisecondsSinceEpoch);


//declared a variable currentDate and initialized it by creating a new Date object using the new Date() constructor. This will set currentDate to the current date and time.

//use the getTime() method on the currentDate object. This method returns the number of milliseconds since January 1, 1970, which is known as the UNIX epoch time.

//store the result of currentDate.getTime() in the variable millisecondsSinceEpoch, which now contains the number of milliseconds since the UNIX epoch.



// Question 5: Convert JavaScript Dates to Strings 

let eventDate = new Date('2024-12-31T18:30:00');
let localizedDateString = eventDate.toLocaleString();
console.log(localizedDateString);

// I declare a variable eventDate and initialize it with a specific future date and time using the new Date() constructor. In this case, the date is set to December 31, 2024, at 18:30:00 (6:30 PM).

// use the toLocaleString() method on the eventDate object. This method is used to convert a date into a string representation in the user's preferred language and format. The resulting string includes the date, time, and other locale-specific information.

//The converted localized date and time string is stored in the variable localizedDateString.

// console.log() to display the localizedDateString in the console. 


