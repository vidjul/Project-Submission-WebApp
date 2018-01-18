'use strict';
module.exports = function(app) {
  var project = require('../controllers/projectController');

  // todoList Routes
  app.route('/projects')
    .get(project.list_all_projects)
    .post(project.create_a_project);


  // app.route('/tasks/:taskId')
  //   .get(todoList.read_a_task)
  //   .put(todoList.update_a_task)
  //   .delete(todoList.delete_a_task);
};
