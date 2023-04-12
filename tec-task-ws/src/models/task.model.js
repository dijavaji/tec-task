const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    trim: true,
  },
  limitDate: {
    type: Date,
    require: true,
    default: Date.now(),
  },
  startTime: {
    type: Date,
    default: Date.now(),
  },
  finishTime: {
    type: Date,
    default: Date.now(),
  },
  remind: {
    type: String,
    trim: true,
  },
  repeat: {
    type: String,
    trim: true,
  },
  complete: {
    type: Boolean,
    require: true,
    default: false,
  },
  createBy: {
    type: String,
    require: true,
    trim: true,
  },
  createAt: {
    type: Date,
    require: true,
    default: Date.now(),
  },
  modifiedBy: {
    type: String,
    trim: true,
  },
  modifiedDate: {
    type: Date,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
