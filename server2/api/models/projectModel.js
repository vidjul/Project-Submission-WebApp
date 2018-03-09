'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Project Class
var ProjectSchema = new Schema({
    title: {
        type: String,
        required: 'Please enter a name'
    },
    description: {
        type: String,
        required: 'Please enter a description'
    },
    specialization: {
        type: String,
        required: 'Please enter a specialization'
    },
    study_year: {
        type: String, //(Number)
        required: 'Please enter a year of study'
    }, 
    keywords: {
        type: Array,
    },
    media_files: {
        type: Array,  //(String)
    },
    status: {
        type: [{
            type: String,
            enum: ['accepted', 'pending', 'rejected']
        }],
        default: ['pending']
    },
    sub_date: { 
        type: Date, 
        default: Date.now 
    },
    edit_date: { 
        type: Date, 
        default: Date.now 
    },
    edit_key: {
        type: String
    },

    likes: {
        type: Array //(StudentSchema)
    },
    comments: {
        type: Array //(CommentSchema)
    }, 
});

module.exports = mongoose.model('Projects', ProjectSchema);