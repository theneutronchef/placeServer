'use strict';
var mongoose = require('mongoose');
var GeoJSON = require('mongoose-geojson-schema');
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
  description: {
    type: String,
  },
  location: mongoose.Schema.Types.Point,
  created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Photos', PhotoSchema);
