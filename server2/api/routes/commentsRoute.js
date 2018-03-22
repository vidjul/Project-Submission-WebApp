const comments = require('../controllers/commentController');

module.exports = function(app){
    app.route('/api/comments/:projectID')
    .get(comments.list_all_comments)
}