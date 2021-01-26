const fs = require("fs");

fs.readFile("./text/from.txt", "utf8", (err, data) => {
  if (err) return console.log(err.message);
  fs.writeFile("./text/to.txt", data, (err) => {
    if (err) return console.log(err.message);
  });
});
