/**
 * VARIABLES
 */
const three = 3;
const six = 6;

console.log('Numbers = ', six, 'and', three);

// add six to three

Add = three + six


// subtract six from three
Minus = six - three

// multiply three times six
Multiply = six * three

// divide three by six
Divide = six / three

// modulo sixDivide = six * three
Modulo = six % three

// log results
console.log('Add=', Add);
console.log('Minus=', Minus);
console.log('Multiply=', Multiply);
console.log('Divide=', Divide);
console.log('Modulo=', Modulo);
// build a function, that:
// takes two parameters




function take(a,b) {

    if (isNaN (a) || isNaN (b)) {
        console.log('the values are NOT numbers     -');// checks if both parameters are numbers, else returns error message in the console
        
    }
    else {
        console.log('the values are  NUMBERS     -');
    
    var ergebniss = a/b;    // divides the first one by the second one

    ergebniss=ergebniss+3;       // adds three to the result of the division
    ergebniss=ergebniss*b;           // multiplies the result by the second parameter
    
    if (ergebniss==21) {          // when the result is equal to 21, subtract 4
        ergebniss=ergebniss-4
    }  

    else {
    ergebniss=ergebniss+4;          // else add 4
    }
    return(ergebniss);         // and then returns the result
}

}
// log the result of the function

console.log(take(4,2));