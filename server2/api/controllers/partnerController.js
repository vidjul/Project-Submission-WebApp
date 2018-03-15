'use strict';


var mongoose = require('mongoose');
var Partner = mongoose.model('Partner');

exports.list_all_partners = function(req, res) {
  Partner.find({}, function(err, partner) {
    if (err)
      res.send(err);
    res.json(partner);
  });
};

exports.create_a_partner = function(req,res) {
  var new_partner = new Partner(req.body);
  console.log(new_partner);
  new_partner.save(function(err, partner) {
    if (err)
      res.send(err);
    res.json(partner);
  });
};

exports.find_by_mail = (req, res) => {
  Project.findONe({ email: req.params.email}, (err, partner) => {
    if (err) {
      res.send(err);
    }
    res.json(partner);
  })
}