//Controller Function 
function getValues() {
    //Get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //parse strings into ints
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //call generate numbers
        let numbers = generateNumbers(startValue, endValue);

        //call display numbers
        displayNumbers(numbers);

    } else {
        alert("Number must be an integer");
    }
}


//Logic Function
function generateNumbers(startValue, endValue) {
    let numbers = []; 
    
    //put the numbers into an array
    for (let index = startValue; index <= endValue; index++) {
        numbers.push(index);
    }
    return numbers;
}


//Display Function 
function displayNumbers(numbers) {
    let templateRows = " ";
    for (let index = 0; index < numbers.length; index++) {
        let number = numbers[index];

        let className = " ";

        if ((number % 3 === 0) && (number % 5 === 0) && (number != 0)) {
            className = "FizzBuzz";
            number = "FizzBuzz";
        }else if ((number % 3 === 0) && (number != 0)) {
            className = "Fizz";
            number = "Fizz";
        } else if ((number % 5 === 0) && (number != 0)) {
            className = "Buzz";
            number = "Buzz";
        } 
        templateRows += `<tr><td class=${className}>${number}</td></tr>`
        //templateRows += `&lt;tr>lt;td class=${className}>${number}&lt;/td>&lt;/tr>`
    }
    document.getElementById("results").innerHTML = templateRows;
}