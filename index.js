const { BooksPrototype } = require("./moda");
const { Books } = require("./modb");
let proto = new Books("Pelican Brief", "John Grisham", "Dinkum Press");
let prototype = new BooksPrototype(proto);
let myClone = prototype.clone();
// console.log(JSON.stringify(myClone));
console.log(myClone.toString());

