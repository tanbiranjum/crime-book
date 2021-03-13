const { findByIdAndUpdate } = require("../model/Record");
const Case = require("../model/Record");

exports.getAllCases = async (req, res, next) => {
  const cases = await Case.find();
  res.status(201).json({
    status: "success",
    data: { case: cases },
  });
};

exports.getCase = async (req, res, next) => {
  const newCase = await Case.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: { case: newCase },
  });
};

exports.createCase = async (req, res, next) => {
  const newCase = await Case.create(req.body);
  res.status(201).json({
    status: "success",
    data: { case: newCase },
  });
};

exports.deleteCase = async (req, res, next) => {
  const deleteCase = await Case.findByIdAndDelete();
  res.status(204).json({
    status: "success",
    data: null,
  });
};

exports.updateCase = async (req, res, next) => {
  const updatedCase = await Case.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: "success",
    data: { case: updatedCase },
  });
};
