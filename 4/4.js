const fs = require("fs");

function create_obj(data) {
  let obj = {};
  data.forEach((element) => {
    if (!element) {
      return;
    }
    let [key, val] = element.split("-").map((el) => el.trim());
    if (obj.hasOwnProperty(key)) {
      obj[key] = [obj[key], val];
    } else {
      obj[key] = val;
    }
  });
  return obj;
}

let name = fs.readFileSync("./txt/names.txt", "utf8");
let names = create_obj(name.split("\r\n"));
let numbers = fs.readFileSync("./txt/numbers.txt", "utf8");
let nums = create_obj(numbers.split("\r\n"));

let WriteToFile = "";
for (let [key, value] of Object.entries(names)) {
  let info = [];
  for (let [ikey, ivalue] of Object.entries(nums)) {
    if (key === ikey) {
      info.push(ivalue);
    }
  }
  info = info.flat(Infinity);
  if (info.length > 1) {
    WriteToFile += `${value}'s phone numbers are ${info.join(",")}\n`;
  } else if (info.length === 1) {
    WriteToFile += `${value}'s phone number is ${info.join(",")}\n`;
  } else if (info.length === 0) {
    WriteToFile += `${value} hasn't any phone number.\n`;
  }
  
}
console.log(WriteToFile)
fs.writeFileSync("./txt/info.txt", WriteToFile.trim());