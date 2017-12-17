"use strict";

const bauturi = require('../models').bauturi;

exports.list = function (req, res) {
  bauturi.findAll().then(bauturi => {
    res.jsonp(bauturi);
  }).catch((error) => res.status(400).send(error));
};

exports.create = function (req, res) {
  res.jsonp(bauturi.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  bauturi.findById(id).then(bauturi => {
    if (!bauturi) {
      return res.status(400).send({
        message: 'bauturi Not Found',
      });
    }
    res.jsonp(bauturi);
  });
};

exports.delete = function (req, res) {
  let id = req.params.id;
  bauturi.findById(req.params.id)
    .then(bauturi => {
      if (!bauturi) {
        return res.status(400).send({
          message: 'bauturi Not Found',
        });
      }
      return bauturi
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};

