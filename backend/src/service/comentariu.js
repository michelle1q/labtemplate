"use strict";

const comentariu = require('../models').comentariu;

exports.list = function (req, res) {
  comentariu.findAll().then(comentariu => {
    res.jsonp(comentariu);
  }).catch((error) => res.status(400).send(error));
};

exports.create = function (req, res) {
  res.jsonp(comentariu.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  comentariu.findById(id).then(comentariu => {
    if (!comentariu) {
      return res.status(400).send({
        message: 'comentariu Not Found',
      });
    }
    res.jsonp(comentariu);
  });
};

exports.delete = function (req, res) {
  let id = req.params.id;
  comentariu.findById(req.params.id)
    .then(comentariu => {
      if (!comentariu) {
        return res.status(400).send({
          message: 'comentariu Not Found',
        });
      }
      return comentariu
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};

