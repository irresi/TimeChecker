//
const path = require("path");

console.log(__dirname);
console.log(__filename);

const obj = path.parse(__filename);
console.log(obj);