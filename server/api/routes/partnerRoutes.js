'use strict';
module.exports = function(app) {
  var partner = require('../controllers/partnerController');

  // todoList Routes
  app.route('/api/partners')
    .get(partner.list_all_partners)
    .post(partner.create_a_partner);
};
