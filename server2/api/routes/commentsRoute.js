const comments = require('../controllers/commentController');

module.exports = function (app) {
    app.route('/api/comments/:projectID')
        .get(comments.list_all_comments)

    app.route('/api/projects/:projectId/comments')
        .post(comments.ask_a_question)
}