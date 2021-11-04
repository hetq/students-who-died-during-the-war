const fs = require("fs");
const Path = require("path");
fs.readdir("assets/img_", (err, files) => {
  files.forEach((file, index) => {
    let fileName = file;
    fileName = fileName.replace(/\s+/g, " ").trim();
    console.log(__dirname);

    const oldPath = Path.join(__dirname + "/assets/img_/", file);
    const newPath = Path.join(__dirname + "/assets/img_/", fileName);

    fs.rename(oldPath, newPath, () => {});
  });
});
