'use strict';
module.exports = function(app) {
  var major = require('../controllers/majorController');

  // todoList Routes
  app.route('/api/majors')
    .get(major.list_all_majors)
    .post(major.create_a_major)
};