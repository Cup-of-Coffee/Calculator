
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
    
    // Stops if calculate was call before update() was called. BASICALLY MEANS YOU CANNOT CLICK + TWICE or SINCE IT'LL BREAK OTHERWISE
    if(tempInputToSeeifUpdate() === wasCalled){
        return;
    }

    // Determine if a number, a operator and a number was given before calculate() was executed, then operate the given inputs first.
    switch(statement){
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
