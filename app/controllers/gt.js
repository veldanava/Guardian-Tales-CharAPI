const { request } = require("express");
const db = require("../models");
const gt = db.gt

// create data
exports.create = (req, res) => {
  req.body.guardian = new String(req.body.guardian)
  gt.create(req.body)
    .then(() => res.send({message: "saved"}))
    .catch(() => res.status(500).send({message: err.message}))
};

// find all data
exports.findAll = (req, res) => {
  gt.find()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({message: err.message}))
};

// show all data
exports.show = (req, res) => {
  const id = req.params.id;
  gt.findById(id)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({message: err.message}))
}; 

// update data
exports.update = (req, res) => {
 const id = req.params.id;
 req.body.guardian = new String(req.body.guardian)
 gt.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
  .then(data => {
    if (!data) {
      res.status(404).send({message: "error"})
    }
    res.send({message: "update success"})
  })
  .catch(err => res.status(500).send({message: err.message}))
}

// delete data
exports.delete = (req, res) => {
  const id = req.params.id;
  gt.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({message: "error"})
        }
        res.send({message: "delete success"})
      })
      .catch(err => res.status(500).send({message: err.message}))
}