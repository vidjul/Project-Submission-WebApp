var mongoose = require('mongoose');
ReferenceMajor = mongoose.model('ReferenceMajor');

exports.list_all_majors = function (req, res) {
    ReferenceMajor.find({}, function (err, task) {
        if (err)
        res.send(err);
        res.json(task);
    });
};

exports.create_a_major = function(req,res) {
    var new_major = new ReferenceMajor(req.body);
    console.log(new_major);
    new_major.save(function(err, major) {
        if (err)
        res.send(err);
        res.json(major);
    });
};