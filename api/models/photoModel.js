'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PhotoSchema = new Schema({
  user_id: {
    type: Number,
    required: 'user id needed'
  },
  file_path: {
    type: String,
    required: 'file destination'
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Photos', PhotoSchema);
