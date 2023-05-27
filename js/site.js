//Controller Function 
function getValues() {
    //Get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //parse strings into ints
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //call fizzbuzz 
        let numbers = fizzBuzz(startValue, endValue);

        //call display numbers
        displayNumbers(numbers);

    } else {
        alert("Number must be an integer");
    }
}


//Logic Function
function fizzBuzz(startValue, endValue) {
    let numbers = []; 
    
    //put the numbers into an array
    for (let index = startValue; index <= endValue; index++) {

        if ((index % 3 === 0) && (index % 5 === 0)) {
            numbers.push("FizzBuzz");
        }else if (index % 3 === 0) {
            numbers.push("Fizz");
        } else if (index % 5 === 0) {
            numbers.push("Buzz");
        } else {
            numbers.push(index);
        }
        
    }
    return numbers;
}


//Display Function 
function displayNumbers(numbers) {
    let templateRows = " ";
    for (let index = 0; index < numbers.length; index++) {
        let number = numbers[index];

        let className = " ";

        if (number === "FizzBuzz") {
            className = "FizzBuzz";
        } else if (number === "Fizz") {
            className = "Fizz";
        } else if (number === "Buzz") {
            className = "Buzz";
        } 

        templateRows += `<tr><td class=${className}>${number}</td></tr>`
        //templateRows += `&lt;tr>lt;td class=${className}>${number}&lt;/td>&lt;/tr>`
    }
    document.getElementById("results").innerHTML = templateRows;
}