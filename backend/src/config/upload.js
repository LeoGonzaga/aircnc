const multer = require("multer");
const path = require("path");

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "uploads"),
    filename: (req, file, cd) => {
      const ext = path.extname(file.originalname);
      const name = path.basename(file.originalname, ext);
      cd(null, `${name}-${Date.now()}${ext}`);
    }
  })
};
