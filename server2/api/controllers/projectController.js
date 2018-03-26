'use strict';

const generator = require('generate-password');
var mongoose = require('mongoose');
const Project = mongoose.model('Project');
const Partner = mongoose.model('Partner');
const Admin = mongoose.model('Admin');

const mailer = require('nodemailer');
const smtpTransporter = mailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'no.reply.projets.pulv@gmail.com',
    pass: 'vidududu'
  }
});


exports.list_all_projects = function (req, res) {
  Project.find({}, function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create_a_project = function (req, res) {
  let name;
  let editKey = generator.generate({
    length: 15,
    numbers: true
  });
  let mail = {
    from: 'no.reply.projets.pulv@gmail.com',
    subject: 'Soumission d\'un projet',
    to: req.body.email
  };
  let json = req.body;
  json.edit_key = editKey;
  Partner.findOne({ email: req.body.email }, (err, partner) => {
    if (err) {
      res.send(err);
    }
    if (partner != null) {
      json.partner = partner;
      json.status = 'pending';
      var new_project = new Project(json);
      new_project.save(function (err, project) {
        if (err)
          res.send(err);
        else {
          name = partner.first_name;
          mail.text = `Bonjour ${name}, \n
          Votre demande de soumission a bien été enregistrée. \n 
          Voici votre lien pour l'éditer. \n
          http://localhost:3000/Edit/${editKey}`
          smtpTransporter.sendMail(mail, (err, result) => {
            if (err) {
              smtpTransporter.close();
              console.log(err);
              res.send(err);
            } else {
              res.send('Mail ok!');
              smtpTransporter.close();
            }
          });
        }
      });
    }
    else {
      let new_partner = new Partner({
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "email": req.body.email,
        "company": req.body.company
      });
      new_partner.save((err, partner) => {
        if (err) {
          res.send(err);
        }
        else {
          json.partner = new_partner;
          json.status = 'pending';
          var new_project = new Project(json);
          new_project.save(function (err, project) {
            if (err)
              res.send(err);
            else {
              name = new_partner.first_name;
              mail.text = `Bonjour ${name}, \n
              Votre demande de soumission a bien été enregistrée. \n 
              Voici votre lien pour l'éditer. \n
              http://localhost:3000/Edit/${editKey}`
              smtpTransporter.sendMail(mail, (err, result) => {
                if (err) {
                  smtpTransporter.close();
                  console.log(err);
                  res.send(err);
                } else {
                  smtpTransporter.close();
                  res.send('Mail ok!');
                }
              });
            }
          });
        }
      });
    }
  })
};

exports.read_a_project = (req, res) => {
  Project.findById(req.params.projectId, (err, project) => {
    if (err) {
      res.send(err);
    }
    res.json(project);
  });
}

exports.find_by_edit_key = (req, res) => {
  Project.findOne({ edit_key: req.params.editKey }, (err, project) => {
    if (err) {
      res.send(err);
    }
    res.json(project);
  })
}

exports.update_a_project = (req, res) => {
  Project.findOneAndUpdate({ _id: req.params.projectId }, req.body, { new: true }, (err, project) => {
    if (err) {
      res.send(err);
    }
    res.json(project);
  })

}

exports.delete_a_project = (req, res) => {
  Project.findByIdAndRemove(req.params.projectId, function (err, note) {
    if (err) {
      console.log(err);
      if (err.kind === 'ObjectId') {
        return res.status(404).send({ message: "Project not found with id " + req.params.noteId });
      }
      return res.status(500).send({ message: "Could not delete project with id " + req.params.noteId });
    }

    if (!note) {
      return res.status(404).send({ message: "Project not found with id " + req.params.noteId });
    }

    res.send({ message: "Project deleted successfully!" })
  });
}

exports.destroy = (req,res) => {
  Project.remove({}, function(err) {
    if (err) {
      res.send(err);
    }
    else {
      res.send('ok!');
    }
  })
}