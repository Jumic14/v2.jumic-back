const Skill = require("../models/Skill");

exports.createSkill = (req, res, next) => {
  const skill = new Skill({
    skill_id: req.body.skill_id,
    skill_desc: req.body.skill_desc,
    skill_desc_en: req.body.skill_desc_en,
    certification_id: req.body.certification_id,
  });
  skill
    .save()
    .then(() => {
      res.status(201).json({ message: "Skill created successfully!" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.getOneSkill = (req, res, next) => {
  Skill.findOne({ _id: req.params.id })
    .then((skill) => {
      if (!skill) {
        return res.status(404).json({ message: "Skill not found" });
      }
      res.status(200).json(skill);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

exports.modifySkill = (req, res, next) => {
  Skill.updateOne({ _id: req.params.id }, { ...req.body })
    .then(() => {
      res.status(200).json({ message: "Skill updated successfully!" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.deleteSkill = (req, res, next) => {
  Skill.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({ message: "Skill deleted successfully!" });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

exports.getAllSkills = (req, res, next) => {
  Skill.find()
    .then((skills) => {
      res.status(200).json(skills);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};
