const Curriculum = require("../models/Curriculum");

exports.createCurriculum = (req, res, next) => {
  const curriculum = new Curriculum({
    curriculum_id: req.body.curriculum_id,
    curriculum_name: req.body.curriculum_name,
    curriculum_url: req.body.curriculum_url,
  });
  curriculum
    .save()
    .then(() => {
      res.status(201).json({ message: "Curriculum created successfully!" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.getOneCurriculum = (req, res, next) => {
  Curriculum.findOne({ _id: req.params.id })
    .then((curriculum) => {
      if (!curriculum) {
        return res.status(404).json({ message: "Curriculum not found" });
      }
      res.status(200).json(curriculum);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

exports.modifyCurriculum = (req, res, next) => {
  Curriculum.updateOne({ _id: req.params.id }, { ...req.body })
    .then(() => {
      res.status(200).json({ message: "Curriculum updated successfully!" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.deleteCurriculum = (req, res, next) => {
  Curriculum.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({ message: "Curriculum deleted successfully!" });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

exports.getAllCurriculums = (req, res, next) => {
  Curriculum.find()
    .then((curriculums) => {
      res.status(200).json(curriculums);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};
