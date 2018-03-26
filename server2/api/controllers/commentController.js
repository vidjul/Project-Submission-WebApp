'use strict';


var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');
const Project = mongoose.model('Project');
const Partner = mongoose.model('Partner');
const Person = mongoose.model('Person');

exports.list_all_comments = function (req, res) {
  const projectId = req.params.projectID
  Partner.find({ 'id_project': projectId }, function (err, partner) {
    if (err)
      res.send(err);
    res.json(partner);
  });
};

exports.ask_a_question = (req, res) => {
  var id_project = req.params.projectId;
  var content = req.body.content;
  console.log(id_project);
  console.log(content)
  console.log(req.body.userId)

  Partner.findById(req.body.userId)
    .then((result) => {
      console.log(result)
      var user = result
      let new_comment = new Comment({
        "id_project": id_project,
        "author": user,
        "content": content,
      })

      new_comment.save((err, comment) => {
        if (err) {
          res.send(err);
          console.log(err);
        }
        else {
          Project.findOneAndUpdate(id_project, {$push : {comments : comment}}, { new: true } , (err,project)=>{
            res.send(project)
          })
        }
      })
    })
}