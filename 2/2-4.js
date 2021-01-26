const fs = require("fs");

let Files = ["./text/append.txt", "./text/from.txt"];
let Reads = ""
for (let txt of Files) {
  const from = fs.readFileSync(txt, "utf8");
  Reads+=from
  fs.writeFileSync("./text/to.txt", Reads);
}
