// loop until nothing can move - no two items can be in the same space.
// . empty space
// @ person who moves right
// o rock that rolls when pushed
// # immovable wall

data = [
    {
        before: ".@.o.#.",
        after:  "...@o#."
    },
    {
        before: "..@..o..#..",
        after:  "......@o#.."
    }
];

function loop(before) {
    let after = before.split("");
    let changed = true;
    //CODE HERE -console.log all the inbetween states

    return after.join("");
}

data.forEach(item => console.log(loop(item.before) === item.after))