import multer from "multer";
import path from "path";
import crypto from "crypto";
import { Response } from "express";

export default module.exports = {
  dest: path.resolve(__dirname, "..", "..", "tmp", "uploads"),
  onError: (err, next) => {
    console.log(err);
    next(err);
  },
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, path.resolve(__dirname, "..", "..", "tmp", "uploads"));
    },
    filename: (req, file, callback) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) {
          console.log("error cryto", err);
          callback(err, null);
        }

        const fileName = `${hash.toString("hex")}-${file.originalname}`;
        console.log("fileName", fileName);

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
