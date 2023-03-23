const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const {CloudinaryStorage} = require('multer-storage-cloudinary');

const storage = new CloudinaryStorage(
    {
        cloudinary: cloudinary,
        params: {
            folder: "obras_de_arte",
            allowedFormats: ["jpg", "png", "jpeg", "webp", "gif"]
        }
    }
)

const upload = multer({storage});

module.exports = upload;