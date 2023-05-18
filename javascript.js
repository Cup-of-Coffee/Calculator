/* TODO
# Add larger display to include firstComponent and operatorComponent above secondComponent
# Add a button to flip calculator to show instructions and explainations on the back (done as a second tab)

# Resolve edge-cases resulting in errors:
> You can update() multiple decimals into a formula; it should be limited to only be added once.
> You can erase all numbers on the display, making it blank; it should display a zero instead.
> Numbers can get large enough to go off the display element; limit the number of characters it can show.
*/

// The display components.
let firstComponent = "";
let operatorComponent = "";
let secondComponent = "";

// Keyboard Events for 0-9, +, -, x, /, ., =, c and ac.
document.addEventListener('keydown', (event) => {

    switch(event.key){
        case '0':
            update(0);
            break;
        case '1':
            update(1);
            break;
        case '2':
            update(2);
            break;
        case '3':
            update(3);
            break;
        case '4':
            update(4);
            break;
        case '5':
            update(5);
            break;
        case '6':
            update(6);
            break;
        case '7':
            update(7);
            break;
        case '8':
            update(8);
            break;
        case '9':
            update(9);
            break;
        case '+':
            calculate('+');
            break;
        case '-':
            calculate('-');
            break;
        case 'x':
            calculate('x');
            break;
        case '/':
            calculate('/');
            break;
        case '%':
            calculate('%');
            break;
        case 'c':
            erase('c');
            break;
        case 'a':
            eraseAll();
            break;
        case '=':
            operate();
            break;
    }  
  });
  


/*
Populate the display with the latest number in the string and update the display with DOM. These numbers are treated as strings.
*/
function update(number){
    const displayPicker = document.getElementById('display');

    if(!operatorComponent){
        firstComponent += number;
        displayPicker.innerText = firstComponent;
    }else{
        secondComponent += number;
        displayPicker.innerText = secondComponent;
    }
}


/*
Clear the latest number in the string and use DOM to update the display.
*/
function erase(){
    if(!operatorComponent){
        firstComponent = firstComponent.slice(0, -1);

        const displayPicker = document.getElementById('display');
        displayPicker.innerText = firstComponent;
    }else{
        secondComponent = secondComponent.slice(0, -1);

        const displayPicker = document.getElementById('display');
        displayPicker.innerText = secondComponent;
    }
}


/*
Clear all variables and use DOM to reset the display.
*/
function eraseAll() {
    firstComponent = "";
    operatorComponent = "";
    secondComponent = "";
    
    const displayPicker = document.getElementById('display');
    displayPicker.innerText = "0";
}


/*
Determines the final value of firstComponent and sets operatorComponent, then switch to secondComponent.
*/
function calculate(operator){
    
    // Checks if secondComponent is set, if so then just execute operate() and set the next operatorComponent.
    if(secondComponent){
        operate();
    }

    switch(operator){
        case '+':
            operatorComponent = '+';
            break;
        case '-':
            operatorComponent = '-';
            break;
        case 'x':
            operatorComponent = 'x';
            break;
        case '/':
            operatorComponent = '/';
            break;
        case '%':
            operatorComponent = '%';
            break;
    }
}


/*
Parse firstComponent and secondComponent into Ints, and use operatorComponent to decide operator function, 
then compute them calculation in order with the final result set to firstComponent and displayed.
*/
function operate(){
    first = parseFloat(firstComponent);
    second = parseFloat(secondComponent);
    
    switch(operatorComponent){
        case '+':
            firstComponent = addition(first, second);
            break;
        case '-':
            firstComponent = subtraction(first, second);
            break;
        case 'x':
            firstComponent = multiplication(first, second);
            break;
        case '/':
            firstComponent = division(first, second); 
            break;
        case '%':
            firstComponent = modulus(first, second); 
            break;
    }

    firstComponent = firstComponent.toString();
    operatorComponent = "";
    secondComponent = "";
    
    const displayPicker = document.getElementById('display');
    displayPicker.innerText = firstComponent;
};


/*
Add the two numbers provided.
*/
function addition(firstValue, secondValue){
    return (firstValue + secondValue);
};


/*
Subtract the two numbers provided.
*/
function subtraction(firstValue, secondValue){
    return (firstValue - secondValue);
};


/*
Multiply the two numbers provided.
*/
function multiplication(firstValue, secondValue){
    return (firstValue * secondValue);
};


/*
Divide the two numbers provided.
*/
function division(firstValue, secondValue){
    if(firstValue === 0 && secondValue === 0){
        return "CANNOT DIVIDE"
    }else{
        return (firstValue / secondValue);
    }
};

/*
Get remainder of the two numbers provided.
*/
function modulus(firstValue, secondValue){
    if(firstValue === 0 && secondValue === 0){
        return "CANNOT DIVIDE"
    }else{
        return (firstValue % secondValue);
    }
};

/*
Add or remove a negative sign to the numbers and use DOM to update the display.
*/
function negative() {
    if(secondComponent){
        if(Array.from(secondComponent)[0] === '-'){
            secondComponent = secondComponent.slice(1);
        }else{
            secondComponent = '-' + secondComponent
        }

        const displayPicker = document.getElementById('display');
        displayPicker.innerText = secondComponent;
    }else{
        if(Array.from(firstComponent)[0] === '-'){
            firstComponent = firstComponent.slice(1);
        }else{
            firstComponent = '-' + firstComponent
        }

        const displayPicker = document.getElementById('display');
        displayPicker.innerText = firstComponent;
    }
}