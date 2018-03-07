const express = require('express');
const bodyParser = require('body-parser');
const mail = require('../controllers/mailController');

module.exports = (app) => {
    app.route('/api/mail')
        .post(mail.sendMails);
};