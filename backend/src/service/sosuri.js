"use strict";

const sosuri = require('../models').sosuri;


exports.list = function (req, res) {
  sosuri.findAll().then(sosuri => {
    res.jsonp(sosuri);
  }).catch((error) => res.status(400).send(error));
};

exports.create = function (req, res) {
  res.jsonp(sosuri.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  sosuri.findById(id).then(sosuri => {
    if (!sosuri) {
      return res.status(400).send({
        message: 'sosuri Not Found',
      });
    }
    res.jsonp(sosuri);
  });
};

exports.update=function(req, res) {
  sosuri.update(req.body, {
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
  sosuri.findById(req.params.id)
    .then(sosuri => {
      if (!sosuri) {
        return res.status(400).send({
          message: 'sosuri Not Found',
        });
      }
      return sosuri
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};

