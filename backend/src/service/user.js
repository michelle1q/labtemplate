"use strict";

const user = require('../models').user;

exports.list = function (req, res) {
  user.findAll().then(user => {
    res.jsonp(user);
  }).catch((error) => res.status(400).send(error));
};

exports.create = function (req, res) {
  res.jsonp(user.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  user.findById(id).then(user => {
    if (!user) {
      return res.status(400).send({
        message: 'User Not Found',
      });
    }
    res.jsonp(user);
  });
};

//doesn't work
// exports.update = function(req, res) {
//   var id = req.params.id;
//   var updates = req.body;

//   user.update((id), req.body,
//     function (err, numberAffected) {
//       if (err) return console.log(err);
//       console.log('Updated %d user', numberAffected);
//       res.send(202);
//   });
// }

exports.delete = function (req, res) {
  let id = req.params.id;
  user.findById(req.params.id)
    .then(user => {
      if (!user) {
        return res.status(400).send({
          message: 'User Not Found',
        });
      }
      return user
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};

