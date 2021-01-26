const fs = require("fs");
const from = fs.readFileSync("./text/from.txt","utf8");
fs.writeFileSync("./text/to.txt", from);
