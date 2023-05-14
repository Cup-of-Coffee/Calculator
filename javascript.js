/* TODO
# Add decimals
# Add modus operator
# Add keyboard support
# Add larger display to include firstComponent and operatorComponent above secondComponent
# Separate erase into "Clear" which removes last input and "All Clear" which removes all inputs
# Resolve edge-cases resulting in errors:
> none currently.
*/

// The display components
let firstComponent = "";
let operatorComponent = "";
let secondComponent = "";


/*
Populate the display with the latest number and update the display with DOM. These numbers are treated as strings.
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
Clear variables and use DOM to reset the display.
*/
function erase(){
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
    }
}


/*
Parse firstComponent and secondComponent into Ints, and use operatorComponent to decide operator function, 
then compute them calculation in order with the final result set to firstComponent and displayed.
*/
function operate(){
    first = parseInt(firstComponent);
    second = parseInt(secondComponent);

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
    }

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
    console.log(firstValue);
    console.log(secondValue);
    if(firstValue === 0 && secondValue === 0){
        return "CANNOT DIVIDE"
    }else{
        return (firstValue / secondValue);
    }
};
