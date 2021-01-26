const fs = require("fs");

// fs.writeFileSync("./text/newFile.txt","");

// fs.appendFileSync("./text/newFile.txt", "");

// let res = fs.openSync("./text/newFile.txt", "w+");

try {
  if (fs.existsSync("./text/newFile.txt")) {
    console.log("File exists.");
  } else {
    console.log("File does not exist.");
    fs.openSync("./text/newFile.txt", "w+");
  }
} catch (err) {
  console.error(err);
}
