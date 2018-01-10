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

exports.update=function(req, res) {
  user.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(function (updatedRecords) {
    res.status(200).json(updatedRecords);
  })
  .catch(function (error){
    res.status(500).json(error);
  });
};

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

