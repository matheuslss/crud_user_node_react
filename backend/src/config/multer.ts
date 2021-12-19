import multer from "multer";
import path from "path";
import crypto from "crypto";

const dest = path.resolve(__dirname, "..", "..", "tmp", "uploads");

export default module.exports = {
  dest: dest,
  onError: (err, next) => {
    console.log(err);
    next(err);
  },
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, dest);
    },
    filename: (req, file, callback) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) {
          console.log("error cryto", err);
          callback(err, null);
        }

        const fileName = `${hash.toString("hex")}-${file.originalname}`;

        callback(null, fileName);
      });
    },
  }),
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req, file, callback) => {
    const allowedMimes = [
      "image/jpeg",
      "image/jpg",
      "image/pjpeg",
      "image/png",
      "image/gif",
    ];

    if (allowedMimes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new Error("Invalid file type."));
    }
  },
};
