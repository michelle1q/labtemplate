"use strict";

const sosuri = require('../models').sosuri;

exports.list = function (req, res) {
  sosuri.findAll().then(user => {
    res.jsonp(sosuri);
  }).catch((error) => res.status(400).send(error));
};

exports.create = function (req, res) {
  res.jsonp(sosuri.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  sosuri.findById(id).then(user => {
    if (!sosuri) {
      return res.status(400).send({
        message: 'User Not Found',
      });
    }
    res.jsonp(sosuri);
  });
};

exports.delete = function (req, res) {
  let id = req.params.id;
  sosuri.findById(req.params.id)
    .then(sosuri => {
      if (!sosuri) {
        return res.status(400).send({
          message: 'User Not Found',
        });
      }
      return sosuri
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};

