const WorkStack = require("../models/WorkStack");

exports.createWorkStack = (req, res, next) => {
  const workStack = new WorkStack({
    work_id: req.body.work_id,
    stack_id: req.body.stack_id,
  });
  workStack
    .save()
    .then(() => {
      res
        .status(201)
        .json({ message: "WorkStack association created successfully!" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.getWorkStack = (req, res, next) => {
  WorkStack.findOne({ _id: req.params.id })
    .then((workStack) => {
      if (!workStack) {
        return res
          .status(404)
          .json({ message: "WorkStack association not found" });
      }
      res.status(200).json(workStack);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

exports.deleteWorkStack = (req, res, next) => {
  WorkStack.deleteOne({ _id: req.params.id })
    .then(() => {
      res
        .status(200)
        .json({ message: "WorkStack association deleted successfully!" });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

exports.getAllWorkStacks = (req, res, next) => {
  WorkStack.find()
    .then((workStacks) => {
      res.status(200).json(workStacks);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};
