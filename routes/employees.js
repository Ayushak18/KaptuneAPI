let express = require('express');
let router = express.Router();
let Employee = require('../models/employees');

/* GET Employees listing. */
router.get('/', function (req, res, next) {
  Employee.find({}, (error, allEmployees) => {
    if (error) {
      res.json({ message: 'Failed to fetch employees' });
    } else {
      res.json(allEmployees);
    }
  });
});

// Add new employee
router.post('/', (req, res) => {
  Employee.create(req.body, (error, createdEmployee) => {
    if (error) {
      res.json({ message: 'Employee not created' });
    } else {
      res.json(createdEmployee);
    }
  });
});

// Update an employee
router.put('/:id', (req, res) => {
  Employee.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (error, updatedEmployee) => {
      if (error) {
        res.json({ message: 'Updation Failed,try Again' });
      } else {
        res.json(updatedEmployee);
      }
    }
  );
});

// Delete an employee
router.delete('/:id', (req, res) => {
  Employee.findByIdAndRemove(req.params.id, (error, deletedEmployee) => {
    if (error) {
      res.json({ message: 'Deletion failed' });
    } else {
      res.json({ message: 'Employee deleted' });
    }
  });
});

module.exports = router;
