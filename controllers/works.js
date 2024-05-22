const Work = require("../models/Work");

exports.createWork = (req, res, next) => {
  const work = new Work({
    work_id: req.body.work_id,
    work_name: req.body.work_name,
    work_year: req.body.work_year,
    work_cover: req.body.work_cover,
    work_repo: req.body.work_repo,
    work_url: req.body.work_url,
    work_category: req.body.work_category,
    work_context: req.body.work_context,
    work_intro: req.body.work_intro,
    work_desc: req.body.work_desc,
    work_context_en: req.body.work_context_en,
    work_intro_en: req.body.work_intro_en,
    work_desc_en: req.body.work_desc_en,
  });
  work
    .save()
    .then(() => {
      res.status(201).json({ message: "Work created successfully!" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.getOneWork = (req, res, next) => {
  Work.findOne({ _id: req.params.id })
    .then((work) => {
      if (!work) {
        return res.status(404).json({ message: "Work not found" });
      }
      res.status(200).json(work);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

exports.modifyWork = (req, res, next) => {
  Work.updateOne({ _id: req.params.id }, { ...req.body })
    .then(() => {
      res.status(200).json({ message: "Work updated successfully!" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.deleteWork = (req, res, next) => {
  Work.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({ message: "Work deleted successfully!" });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

exports.getAllWorks = (req, res, next) => {
  Work.find()
    .then((works) => {
      res.status(200).json(works);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};
