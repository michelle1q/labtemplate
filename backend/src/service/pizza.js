"use strict";

const pizza = require('../models').pizza;

exports.list = function (req, res) {
  pizza.findAll().then(pizza => {
    res.jsonp(pizza);
  }).catch((error) => res.status(400).send(error));
};

exports.create = function (req, res) {
  res.jsonp(pizza.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  pizza.findById(id).then(pizza => {
    if (!pizza) {
      return res.status(400).send({
        message: 'pizza Not Found',
      });
    }
    res.jsonp(pizza);
  });
};

exports.update=function(req, res) {
  pizza.update(req.body, {
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
  pizza.findById(req.params.id)
    .then(pizza => {
      if (!pizza) {
        return res.status(400).send({
          message: 'pizza Not Found',
        });
      }
      return pizza
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};

