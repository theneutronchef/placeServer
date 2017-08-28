'use strict';


var mongoose = require('mongoose'),
  Photo = mongoose.model('Photos'),
  User = mongoose.model('Users');

// Photos

exports.list_all_photos = function(req, res) {
  Photo.find({}, function(err, photo) {
    if (err)
      res.send(err);
    res.json(photo);
  });
};

exports.upload_photo = function(req, res) {
  var new_photo = new Photo(req.body);
  new_photo.save(function(err, photo) {
    if (err)
      res.send(err);
    res.json(photo);
  });
};


exports.find_photo = function(req, res) {
  Photo.findById(req.params.photoId, function(err, photo) {
    if (err)
      res.send(err);
    res.json(photo);
  });
};


exports.update_photo = function(req, res) {
  Photo.findOneAndUpdate({_id: req.params.photoId}, req.body, {new: true}, function(err, photo) {
    if (err)
      res.send(err);
    res.json(photo);
  });
};


exports.delete_photo = function(req, res) {
  Photo.remove({
    _id: req.params.photoId
  }, function(err, photo) {
    if (err)
      res.send(err);
    res.json({ message: 'Photo successfully deleted' });
  });
};

// Users 

exports.list_all_users = function(req, res) {
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.create_user = function(req, res) {
  var new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.find_user = function(req, res) {
  User.findById(req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.update_user = function(req, res) {
  User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.delete_user = function(req, res) {
  User.remove({ _id: req.params.userId }, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};

