'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  photo_ids: {
    type: [Number],
  },
  description: {
    type: String,
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Users', UserSchema);
