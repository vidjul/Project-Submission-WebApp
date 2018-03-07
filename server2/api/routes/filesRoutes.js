const express = require('express');
const fs = require('fs');
const multer = require('multer');
const router = express.Router();
const upload = multer({dest: './.uploads/'});

 module.exports = (app) => {
     app.route('/api/addFile')
     .post(upload.any(), function (req, res, next) {
        if (!req.files) {
           return next(new Error('No files uploaded'));
        }
     console.log(req.files);
       /* req.files.forEach((file) => {
           fs.unlinkSync(path.join(__dirname, file.path));
        });*/
        res.send(req.files)
     });
 };