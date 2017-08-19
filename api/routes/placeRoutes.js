'use strict';
module.exports = function(app) {
  var photoList = require('../controllers/placeController');

  app.route('/photos')
    .get(photoList.list_all_photos)
    .post(photoList.create_a_photo);


  app.route('/photos/:photoId')
    .get(photoList.read_a_photo)
    .put(photoList.update_a_photo)
    .delete(photoList.delete_a_photo);
};
