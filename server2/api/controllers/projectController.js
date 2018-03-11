'use strict';

const generator = require('generate-password');
var mongoose = require('mongoose');
Project = mongoose.model('Project');
const Partner = mongoose.model('Partner');

exports.list_all_projects = function (req, res) {
  Project.find({}, function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create_a_project = function (req, res) {
  let json = req.body;
  let editKey = generator.generate({
    length: 15,
    numbers: true
  });
  json.edit_key = editKey;
  Partner.findOne({ email: req.body.email }, (err, partner) => {
    if (err) {
      res.send(err);
    }
    if (partner != null) {
      json.partner = partner;
      var new_project = new Project(json);
      new_project.save(function (err, project) {
        if (err)
          res.send(err);
        res.json(project);
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
        json.partner = new_partner;
        var new_project = new Project(json);
        new_project.save(function (err, project) {
          if (err)
            res.send(err);
          res.json(project);
        });
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

