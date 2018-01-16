/*
  The permitted SchemaTypes are

String
Number
Date
Buffer
Boolean
Mixed
ObjectId
Array
});*/


var mongoose = require('mongoose');
	extend = require('mongoose-schema-extend');
var Schema = mongoose.Schema;


//Person Class
var PersonSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true }
});
module.exports = mongoose.model('Person', PersonSchema);

//Student Class
var StudentSchema = PersonSchema.extend({
	specialization: String,
	study_year: Number
});
module.exports = mongoose.model('Student', StudentSchema);

//Partner Class
var PartnerSchema = PersonSchema.extend({
	company: String, 
	submitted_projects: Array //(Project) TODO verifier
});
module.exports = mongoose.model('Partner', PartnerSchema);

//Administration Class
var AdministrationSchema = PersonSchema.extend({
	specialization: String, 
});
module.exports = mongoose.model('Administration', AdministrationSchema);

//Comment Class
var CommentSchema = new Schema({
	author: PersonSchema,
	content: String
});
module.exports = mongoose.model('Comment', CommentSchema);

//Project Class
var ProjectSchema = new Schema({
	title: String,
	description: String,
	specialization: String,
	study_year: Array, //(Number)
	keywords: Array,   //(String)
	media_files: Array, //(String)
	status: String,
	sub_date: { type: Date, default: Date.now }, 
	edit_date: { type: Date, default: Date.now }, 
	edit_link: String, 
	likes: Array, //(StudentSchema)
	comments: Array, //(CommentSchema)
})
module.exports = mongoose.model('Project', ProjectSchema);
