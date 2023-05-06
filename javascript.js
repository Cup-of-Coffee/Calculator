
let numberFirst;
let operator;
let numberSecond;


/*
Update display when a button is clicked.
*/
function updateDisplay (){

};


/*
Clear calculation.
*/
function clear (){

}


/*
Compute calculation.
*/
function operate (valueOne, valueTwo, operator){
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
function addition(){

};


/*
Subtract the two numbers provided.
*/
function subtraction(){

};


/*
Multiply the two numbers provided.
*/
function multiplication(){

};


/*
Divide the two numbers provided.
*/
function division(){

};
