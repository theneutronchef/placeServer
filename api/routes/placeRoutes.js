'use strict';
module.exports = function(app) {
  var controller = require('../controllers/placeController');

  app.route('/photos')
    .get(controller.list_all_photos);

  app.route('/upload')
    .post(controller.upload_photo);

  app.route('/photos/:photoId')
    .get(controller.find_photo)
    .put(controller.update_photo)
    .delete(controller.delete_photo);

  app.route('/users')
    .get(controller.list_all_users);

  app.route('/create_user')
    .post(controller.create_user);

  app.route('/users/:userId')
    .get(controller.find_user)
    .put(controller.update_user)
    .delete(controller.delete_user);
};
