/* TODO

# The default 0 is fake; remember to have a exception for when implementing decimals.
# Finish calculate()
# Finish operate()
# Resolve edge-cases resulting in errors:
> If a user clicks a operator before inputting any number, it'll return a null error.

*/

// The display components
let firstComponent = "";
let secondComponent = "";
let operatorComponent = "";


/*
Populate the display with the latest number componet or final result with DOM.
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
    componentOne = "";
    operatorComponent = "";
    componentTwo = "";
    
    const displayPicker = document.getElementById('display');
    displayPicker.innerText = "0";
}


/*
Determines the final value of firstComponent and sets operatorComponent, then switch to secondComponent.
*/
function calculate(operator){
    
    // Checks if secondComponent is set, if so then just execute operate().
    if(secondComponent){
        operate();
        return;
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
Combine firstComponent, operatorComponent and secondComponent, then compute them calculation in order with the final result set to firstComponent and displayed.
*/
function operate(){
    switch(operatorComponent){
        case '+':
            firstComponent = addition(firstComponent, secondComponent);
            break;
        case '-':
            firstComponent = subtraction(firstComponent, secondComponent);
            break;
        case 'x':
            firstComponent = multiplication(firstComponent, secondComponent);
            break;
        case '/':
            firstComponent = division(firstComponent, secondComponent); 
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
    return firstValue + secondValue;
};


/*
Subtract the two numbers provided.
*/
function subtraction(firstValue, secondValue){
    return firstValue - secondValue;
};


/*
Multiply the two numbers provided.
*/
function multiplication(firstValue, secondValue){
    return firstValue * secondValue;
};


/*
Divide the two numbers provided.
*/
function division(firstValue, secondValue){
    return firstValue / secondValue;
};
