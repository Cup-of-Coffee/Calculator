/* TODO

# The default 0 is hardcoded and fake, figure out a way to let a zero be the first number when the page is loaded and when erase() is called that doesn't stack with new numbers.
# Finish calculate()
# Finish operate()

*/

// The display components
let componentOne = "0";
let componentTwo = "";
let finalResult = "";


/*
Populate the display with the latest number componet or final result with DOM.
*/
function update(number){
    const displayPicker = document.getElementById('display');
    componentOne = componentOne + number;
    displayPicker.innerText = componentOne;
}


/*
Does one of two things:
 @ If a number is just given before calculate() was executed, it'll wait for a second number to but given.
 @ If a number, a operator and a number was given before calculate() was executed, then it'll perform a operate() and add the operator at the end of it.
*/
function calculate(operator){
    
    // Check if operator is already populated, if so just update operate to new one and await new number before completing operation.
    if(operater){
        // let operater = operator code here
        return;
    }

    // Determine if a number, a operator and a number was given before calculate() was executed, then operate the given inputs first.
    switch(operator){
        case 0:                         // +
            
        break;
        case 1:                         // -
            
        break;
        case 2:                         // x
            
        break;
        case 3:                         // /
            
        break;
    }
    
    
    if(statement){
        operate();
    }


    // Determine which operator was called; then add the operator next.
    if(operator === '+'){



    }else if(operator === '-'){

        

    }else if(operator === 'x'){



    }else{



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
Translate the given formula into readable numbers and operators, then compute the calculation in order it was typed.
*/
function operate(valueOne, valueTwo, operator){
    if(operator === 'addition'){
        return addition(valueOne, valueTwo);
    }else if(operator === 'subtraction'){
        return subtraction(valueOne, valueTwo);
    }else if(operator === 'multiplication'){
        return multiplication(valueOne, valueTwo);
    }else if(operator === 'division'){
        return division(valueOne, valueTwo);
    }else{
        console.log('ERROR');
    };
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
