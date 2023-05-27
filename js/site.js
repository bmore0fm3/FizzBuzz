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

    //Get the table body element from the page 
    let tableBody = document.getElementById("results");

    //get the template row
    let templateRow = document.getElementById("fbTemplate");

    //clear the table first
    tableBody.innerHTML = ""; 
    
    for (let index = 0; index < numbers.length; index += 5) {
        let tableRow =  document.importNode(templateRow.content, true);

        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].textContent = numbers[index];
        rowCols[0].classList.add(numbers[index]);

        rowCols[1].textContent = numbers[index + 1];
        rowCols[1].classList.add(numbers[index + 1]);

        rowCols[2].textContent = numbers[index + 2];
        rowCols[2].classList.add(numbers[index + 2]);

        rowCols[3].textContent = numbers[index + 3];
        rowCols[3].classList.add(numbers[index + 3]);

        rowCols[4].textContent = numbers[index + 4];
        rowCols[4].classList.add(numbers[index + 4]);
        
        tableBody.appendChild(tableRow);
        
    }
}