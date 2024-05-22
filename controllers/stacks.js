const Stack = require("../models/Stack");

exports.createStack = (req, res, next) => {
  const stack = new Stack({
    stack_id: req.body.stack_id,
    stack_name: req.body.stack_name,
    stack_icon: req.body.stack_icon,
    category_id: req.body.category_id,
  });
  stack
    .save()
    .then(() => {
      res.status(201).json({ message: "Stack created successfully!" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.getOneStack = (req, res, next) => {
  Stack.findOne({ _id: req.params.id })
    .then((stack) => {
      if (!stack) {
        return res.status(404).json({ message: "Stack not found" });
      }
      res.status(200).json(stack);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

exports.modifyStack = (req, res, next) => {
  Stack.updateOne({ _id: req.params.id }, { ...req.body })
    .then(() => {
      res.status(200).json({ message: "Stack updated successfully!" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.deleteStack = (req, res, next) => {
  Stack.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({ message: "Stack deleted successfully!" });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

exports.getAllStacks = (req, res, next) => {
  Stack.find()
    .then((stacks) => {
      res.status(200).json(stacks);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};
