//SEE https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
//for the ... "spread" operator

// LOAD NODEJS ASSERT LIBRARY
var assert = require('assert');

//FUNCTION TO TEST
function add(a, b){
    return a + b;
}

// TEST HARNESS
function test(f, argumentList, expected){
    console.log("TRYING: ", argumentList, "EXPECTED:" + expected)
    assert.deepEqual(f(...argumentList), expected);
}

//TEST DATA
const testCases =[
    {arguments:[2,2], expected:4},
    {arguments:[6,7], expected:13},
    {arguments:[1,1], expected:1},
];

//RUN ALL TESTS
testCases.forEach(t=>test(add, t.arguments, t.expected));
