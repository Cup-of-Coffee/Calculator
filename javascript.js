
// The display formula
let formula;


/*
Populate the display with the latest number input or answer.
*/
function display(input){
    return input;
};


/*
Update formula with a number.
*/
function update(number){

}


/*
Update formula with either number or operator.
*/
function calculate(operator){


    
}


/*
Clear calculation.
*/
function clear(){

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
