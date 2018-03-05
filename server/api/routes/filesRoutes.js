const express = require('express');
const fs = require('fs');
const multer = require('multer');
const router = express.Router();
const upload = multer({dest: './.uploads/'});

router.post('/api/addFile', upload.any(), function (req, res, next) {
    if (!req.files) {
       return next(new Error('No files uploaded'));
    }
 
    req.files.forEach((file) => {
       console.log(file)
       fs.unlinkSync(path.join(__dirname, file.path));
    });
 
    res.status(200).end();
 });

 module.exports = router;