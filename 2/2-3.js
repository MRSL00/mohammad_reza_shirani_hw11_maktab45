const fs = require("fs");

let Files = ["./text/append.txt", "./text/from.txt"];
let Reads = "";
for (let txt of Files) {
  fs.readFile(txt, "utf8", (err, data) => {
    if (err) return console.log(err.message);
    Reads += data;
    fs.writeFile("./text/to.txt", Reads, (err) => {
      if (err) return console.log(err.message);
    });
  });
}
