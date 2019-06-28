// Intermediate Javascript Assessments

// 1. Write an arrow function that takes one argument of type array and returns the contents of that array in reverse order.

var originalArray = [1, 2, 3, 4, 5, 6, 7]
const reverseArr=(arr)=>{
	return arr.reverse()
}
var reversedArr = reverseArr(originalArray)
console.log(reversedArr)

// 2. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(bicycle.type)

// Log the bell:
console.log(bicycle.gear[2])

// Log the PSI:
console.log(bicycle.wheels.specs[2])


// 3. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"
const amountOfLs = (str) =>{
	str = str.toLowerCase()
	let newArr = str.split('')
	let num = 0
	newArr.map((value) =>{ 
		if (value === 'l'){ 
		 num = num + 1
		}
	})
	return num
}
console.log(amountOfLs(ourString))

// 4. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
const getFib = (num) =>{
	let current = 0
	let last = 1
	let arr = []
	for(let i=0;i<num;i++){
		let next = current + last
		arr.push(next)
		last = current
		current = next
	}
	return arr
}
console.log(getFib(10))

//5. Write a function called oddChecker that takes in the fullArr and uses a for loop to return a new array of only odd numbers. Copy and paste your code and refactor using ES6 syntax.

var fullArr = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]

const oddChecker=(arr)=>{
	let newArr = []
	let oddArr = []
	arr.map((value)=>{
		if (typeof value === 'number'){
			newArr.push(value)
		}
	})
	newArr.map((value)=>{
		if(value%2 !== 0){
			oddArr.push(value)	
		}		
	})
	console.log(oddArr)
}
oddChecker(fullArr)