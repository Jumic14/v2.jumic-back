const Image = require("../models/Image");

exports.createImage = (req, res, next) => {
  const image = new Image({
    image_id: req.body.image_id,
    image_title: req.body.image_title,
    image_title_en: req.body.image_title_en,
    image_url: req.body.image_url,
    work_id: req.body.work_id
  });
  image
    .save()
    .then(() => {
      res.status(201).json({ message: "Image created successfully!" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.getOneImage = (req, res, next) => {
  Image.findOne({ _id: req.params.id })
    .then((image) => {
      if (!image) {
        return res.status(404).json({ message: "Image not found" });
      }
      res.status(200).json(image);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

exports.modifyImage = (req, res, next) => {
  Image.updateOne({ _id: req.params.id }, { ...req.body })
    .then(() => {
      res.status(200).json({ message: "Image updated successfully!" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.deleteImage = (req, res, next) => {
  Image.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({ message: "Image deleted successfully!" });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

exports.getAllImages = (req, res, next) => {
  Image.find()
    .then((images) => {
      res.status(200).json(images);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};
