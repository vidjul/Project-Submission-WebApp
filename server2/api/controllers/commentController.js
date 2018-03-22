'use strict';


var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');

exports.list_all_comments = function(req, res) {
    const projectId = req.params.projectID
  Partner.find({'id_project' : projectId}, function(err, partner) {
    if (err)
      res.send(err);
    res.json(partner);
  });
};