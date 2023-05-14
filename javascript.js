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
let finalResult = "";


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
    componentOne = ""
    componentTwo = ""
    finalResult = ""
    
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
Translate the given formula into readable numbers and operators, then compute the calculation in order it was typed.
*/
function operate(){

    switch(operator){
        case '+':
            return addition();
        case '-':
            return subtraction();
        case 'x':
            return multiplication();
        case '/':
            return division(); 
    }
};


/*
Add the two numbers provided.
*/
function addition(valueOne, valueTwo){
    return valueOne + valueTwo;
};


/*
Subtract the two numbers provided.
*/
function subtraction(valueOne, valueTwo){
    return valueOne - valueTwo;
};


/*
Multiply the two numbers provided.
*/
function multiplication(valueOne, valueTwo){
    return valueOne * valueTwo;
};


/*
Divide the two numbers provided.
*/
function division(valueOne, valueTwo){
    return valueOne / valueTwo;
};
