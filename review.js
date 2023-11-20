
x = 123
//console.log(X) //errors as X capital is not defines

A = 65 //64+1
a = 97 //64+1+32

console.log(A, a)

camelCase = "CORRECT"
TitleCase = "GOOD FOR CLASSES(Object Templates) LATER"
snake_case_is_longer = "USED IN PYTHON AND PHP AND PERL"
const TAX_RATE = 0.08 //TRUE CONSTANTS

a = new Array()
a2 = []

o = new Object() //LIKE A DICTIONARY OF KEY-VALUE (WORD-DEFINITION) PAIRS
o2 = {}

// ONE LINE COMMENT IN JS *NOT* IN CSS

/* ****** A BLOCK COMMENT ALSO WORKS IN CSS
middle bit
******* */

html = `<!-- HTML COMMENTS ARE COMPLETELY DIFFERENT -->`

x = 123 // = is the ASSIGNMENT OPERATOR
y = 456
r = x == y  // == is the COMPARISON OPERATOR

//ANATOMY OF A FUNCTION
function myFunc(parameter1, parameter2) {
    return parameter1 + parameter2;
}

argument1 = 123
argument2 = 456
console.log(myFunc(argument1, argument2)) //CALL OR INVOKE

let aa = 123, bb = 456;
console.log(aa, bb)

//MATH ORDER OF OPERATIONS PEMDAS
//P Parentheses
//E Exponents(powers)
//M Multiplication *
//D Division /
//A Addition +
//S Subtraction -
console.log( 5 + 3 * 4 - 2) //PEMDAS says 15 *NOT* 16
console.log( (5 + 3) * (4 - 2)) //PEMDAS says 16 *NOT* 15

//SCOPE
aaa = "global" //no let or const or var and not in a block
function privateFunction(){//START BLOCK
    let aaa = "internal private not global" //LOCAL/BLOCK SCOPE
}//END BLOCK
privateFunction()
console.log(aaa) //prints "global"

let d = new Date() //today
console.log(d.getMonth()) //month 0-11
console.log(d.getTime()) //ms since UNIX EPOCH 1/1/1970 00:00:00

list = [11,22,33]
list.push(44) //appended to end of array
list.unshift(0) //insert at beginning of array
console.log(list) //[0, 11, 22, 33, 44]

// % GET THE REMAINDER OF DIVISION AKA MODULUS OPERATOR FROM MODULO DIVISION
for(let i = 0; i < 10; i++){
    let remainder = i % 2; //ODD OR EVEN
    if(remainder == 0){
        console.log(`---${i}---`)
    }else{
        console.log(`===${i}===`)
    }
}
console.log(`"`) //BACKTICK ` REVERSE QUOTE OR GRAVE ACCENT
console.log("\"") //BACKSLASH IS THE ESCAPE CHARACTER "LITERAL" \n \t \\
console.log('"')

option = "" //FALSEY
option2 = "Kevin" //TRUTHY

//USE || "OR" OPERATOR TO SUBSTITUTE
console.log( option || "BLANK")  // BLANK
console.log( option2 || "BLANK") // KEVIN
