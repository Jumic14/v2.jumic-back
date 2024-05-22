const Certification = require("../models/Certification");

exports.createCertification = (req, res, next) => {
  const certification = new Certification({
    certification_id: req.body.certification_id,
    certification_entity: req.body.certification_entity,
    certification_name: req.body.certification_name,
    certification_name_en: req.body.certification_name_en,
    certification_url: req.body.certification_url,
    category_id: req.body.category_id,
  });
  certification
    .save()
    .then(() => {
      res.status(201).json({ message: "Certification created successfully!" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.getOneCertification = (req, res, next) => {
  Certification.findOne({ _id: req.params.id })
    .then((certification) => {
      if (!certification) {
        return res.status(404).json({ message: "Certification not found" });
      }
      res.status(200).json(certification);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

exports.modifyCertification = (req, res, next) => {
  Certification.updateOne({ _id: req.params.id }, { ...req.body })
    .then(() => {
      res.status(200).json({ message: "Certification updated successfully!" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.deleteCertification = (req, res, next) => {
  Certification.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({ message: "Certification deleted successfully!" });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

exports.getAllCertifications = (req, res, next) => {
  Certification.find()
    .then((certifications) => {
      res.status(200).json(certifications);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};
