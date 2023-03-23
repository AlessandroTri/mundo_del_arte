const cloudinary = require('cloudinary').v2;

const deleteFile = (url) => {
    const imgSplited = url.split('/');
    const nameSplited = imgSplited[imgSplited.length - 1].split('.');
    const folder = imgSplited[imgSplited.length - 2];

    const imgToDelete = `${folder}/${nameSplited[0]}`;
    cloudinary.uploader.destroy(imgToDelete, () => console.log('Imagen borrada en cloudinary'));
}

module.exports = {deleteFile};