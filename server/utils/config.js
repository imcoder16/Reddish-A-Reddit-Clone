require('dotenv').config();
const cloudinary = require('cloudinary').v2;

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const SECRET = process.env.SECRET;
const UPLOAD_PRESET = 'ml_default';

cloudinary.config({
  cloud_name: "ddxssapjm",
  api_key: "749643283324486",
  api_secret: "RQug8rSn8JcYRZiTLJKaGAx2tNw",
});

module.exports = {
  PORT,
  MONGODB_URI,
  SECRET,
  cloudinary,
  UPLOAD_PRESET,
};
