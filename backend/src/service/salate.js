"use strict";

const salate = require('../models').salate;

exports.list = function (req, res) {
  salate.findAll().then(salate => {
    res.jsonp(salate);
  }).catch((error) => res.status(400).send(error));
};

exports.create = function (req, res) {
  res.jsonp(salate.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  salate.findById(id).then(salate => {
    if (!salate) {
      return res.status(400).send({
        message: 'salate Not Found',
      });
    }
    res.jsonp(salate);
  });
};

exports.delete = function (req, res) {
  let id = req.params.id;
  salate.findById(req.params.id)
    .then(salate => {
      if (!salate) {
        return res.status(400).send({
          message: 'salate Not Found',
        });
      }
      return salate
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};

