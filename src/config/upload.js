const multer = require('multer')
const path = require('path')

console.log(path.resolve(__dirname,'..','..','uploads','Perfils'))

module.exports =  multer.diskStorage({
        destination: path.resolve(__dirname,'..','uploads'),
        filename: (req,file,cb) => {
            cb(null,`${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
            
        },
    });
