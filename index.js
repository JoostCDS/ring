const toTitleCase = require("to-title-case");

console.log(toTitleCase);

// Create a constant lower equal to 'the lord of the rings: the return of the king'.
// Create another constant title equal to passing lower to toTitleCase.
// Log title.

const lower = "the lord of the rings: the return of the king";
console.log(lower);

const title = toTitleCase(lower);
console.log(title);
