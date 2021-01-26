const fs = require("fs");

// fs.writeFile("./text/newFile.txt", "", function (err) {
//   if (err) console.log(err.message);
// });

// fs.appendFile("./text/newFile.txt", "", (err) => {
//   if (err) console.log(err.message);
// });

function CreateFile() {
  fs.open("./text/newFile.txt", "w+", function (err, data) {
    if (err) {
      return console.error(err);
    }
    console.log(data);
    console.log("File opened!!");
  });
}

fs.exists("./text/newFile.txt", (exists) => {
  console.log(exists ? "Found" : CreateFile());
});
