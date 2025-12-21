const moment =require('moment');
const now = moment ();

console.log("Today in string");
console.log(now.toString());

console.log("Today in YYYY-MM-DD HH:mm:ss format");
console.log(now.format("YYYY-MM-DD HH:mm:ss"));