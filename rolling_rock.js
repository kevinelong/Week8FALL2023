expected = [
    [1,0,0,0],
    [0,1,0,0],
    [0,0,1,0],
    [0,0,0,1],
];

function roll_rock(row){
    const output=[];
    let changed = false;

    //CODE HERE
    while(!changed){
        //loop through each, right to left
        //if the item to the left can move,
        //then move it to the right
        //if nothing in the loop changed then set changed to false
        changed = true;
        output.push(row)
    }

    return output;
}

roll_rock([1,0,0,0]).forEach(row => console.log(row))
