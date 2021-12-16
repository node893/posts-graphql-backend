const path = require("path");
const fs = require("fs");

const clearImage = (filePath) => {
  console.log(__dirname + "   dirname");
  filePath = path.join(__dirname, '..', filePath);
  fs.unlink(filePath, (err) => console.log(err));
};

exports.clearImage = clearImage;