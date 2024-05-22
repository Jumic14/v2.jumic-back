const Category = require("../models/Category");

exports.createCategory = (req, res, next) => {
  const category = new Category({
    category_id: req.body.category_id,
    category_name: req.body.category_name,
    category_name_en: req.body.category_name_en,
  });
  category
    .save()
    .then(() => {
      res.status(201).json({ message: "Category created successfully!" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.getOneCategory = (req, res, next) => {
  Category.findOne({ _id: req.params.id })
    .then((category) => {
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      res.status(200).json(category);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};


exports.modifyCategory = (req, res, next) => {
  Category.updateOne({ _id: req.params.id }, { ...req.body })
    .then(() => {
      res.status(200).json({ message: "Category updated successfully!" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.deleteCategory = (req, res, next) => {
  Category.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({ message: "Category deleted successfully!" });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

exports.getAllCategories = (req, res, next) => {
  Category.find()
    .then((categories) => {
      res.status(200).json(categories);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};
