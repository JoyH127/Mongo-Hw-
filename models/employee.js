const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const employee = new Schema(
  {
    _id: { type: mongoose.ObjectId },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    job_title: { type: String, required: true },
    address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, require: true },
      zip: { type: Number, require: true },
    },
  },
  { versionKey: false },
  { timestamps: true }
);

// const addressSchema = new Schema({
//   street: { type: String, required: true },
//   city: { type: String, required: true },
//   state: { type: String, require: true },
//   zip: { type: Number, require: true },
// });

module.exports = mongoose.model("employees", employee);
