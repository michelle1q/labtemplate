"use strict";

const deserturi = require('../models').deserturi;

exports.list = function (req, res) {
  deserturi.findAll().then(deserturi => {
    res.jsonp(deserturi);
  }).catch((error) => res.status(400).send(error));
};

exports.create = function (req, res) {
  res.jsonp(deserturi.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  deserturi.findById(id).then(deserturi => {
    if (!deserturi) {
      return res.status(400).send({
        message: 'deserturi Not Found',
      });
    }
    res.jsonp(deserturi);
  });
};

exports.delete = function (req, res) {
  let id = req.params.id;
  deserturi.findById(req.params.id)
    .then(deserturi => {
      if (!deserturi) {
        return res.status(400).send({
          message: 'deserturi Not Found',
        });
      }
      return deserturi
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};

