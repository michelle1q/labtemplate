"use strict";

const sandwich = require('../models').sandwich;

exports.list = function (req, res) {
  sandwich.findAll().then(sandwich => {
    res.jsonp(sandwich);
  }).catch((error) => res.status(400).send(error));
};

exports.create = function (req, res) {
  res.jsonp(sandwich.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  sandwich.findById(id).then(sandwich => {
    if (!sandwich) {
      return res.status(400).send({
        message: 'sandwich Not Found',
      });
    }
    res.jsonp(sandwich);
  });
};

exports.update=function(req, res) {
  sandwich.update(req.body, {
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
  sandwich.findById(req.params.id)
    .then(sandwich => {
      if (!sandwich) {
        return res.status(400).send({
          message: 'sandwich Not Found',
        });
      }
      return sandwich
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};

