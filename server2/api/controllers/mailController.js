'use strict';

const mailer = require('nodemailer');
const smtpTransporter = mailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'no.reply.projets.pulv@gmail.com',
        pass: 'vidududu'
    }
});

exports.sendMails = (request, response) => {
    const recipient = request.body.recipient;
    const subject = request.body.subject;
    const content = request.body.content;
    let mail = {
        from: 'no.reply.projets.pulv@gmail.com',
        to: recipient,
        subject: subject,
        text: content // html content possible. ;)
    }
    smtpTransporter.sendMail(mail, (err, res) => {
        if (err) {
            smtpTransporter.close();
            response.send(err);
        } else {
            smtpTransporter.close();
            response.send('Mail sent');
        }
    });
}