'use strict';


var mongoose = require('mongoose');
  Project = mongoose.model('Projects');

exports.list_all_projects = function(req, res) {
  Project.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create_a_project = function(req,res) {
  var new_project = new Project(req.body);
  console.log(new_project);
  new_project.save(function(err, project) {
    if (err)
      res.send(err);
    res.json(project);
  });
};

