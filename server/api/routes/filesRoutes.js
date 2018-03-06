const express = require('express');
const fs = require('fs');
const multer = require('multer');
const router = express.Router();
const upload = multer({dest: './.uploads/'});

 module.exports = (app) => {

    var storage = multer.diskStorage({})
     app.route('/api/addFile')
     .post(upload.array('files',3), function (req, res, next) {
        if (!req.files) {
           return next(new Error('No files uploaded'));
        }
     
        console.log(req.files);
        req.files.forEach((file) => {
           console.log(file)
           fs.unlinkSync(path.join(__dirname, file.path));
        });
        console.log(req.files);
        res.status(200).end();
     });
 };