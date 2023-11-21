//let item = document.getElementById("item").value;
let item = "Coat";
let price;
switch (item) {
    case "Hat":
    case "Gloves":
        price = 15.95;
        break;
    case "Coat":
        price = 49.99;
        break;
    default:
        price = 0;
}
console.log(price)

for(let i =0; i<5; i++){
    //EXTRA like a while
    i = i + 1
    console.log(i)
}

let i = 0;
i = i + 1;  // add one
i += 1;     // add one
i++;        // add one
console.log(i)

let s = "Results:";
s = s + "MORE";
// s += "MORE";
console.log(s)
