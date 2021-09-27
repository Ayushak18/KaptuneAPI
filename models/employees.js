let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let employeeSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    designation: { type: String, required: true },
    number: { type: Number, required: true },
  },
  { timestamps: true }
);

let Employee = mongoose.model('employee', employeeSchema);

module.exports = Employee;
