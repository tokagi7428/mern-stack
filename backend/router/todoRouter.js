const router = require("express").Router();
const Todo = require("../models/todoModel");

// Create todo
router.route("/todo/create").post((req, res, next) => {
  Todo.create(req.body, (err, data) => {
    if (err) {
      return next();
    } else {
      res.status(200).json(data);
    }
  });
});
// GET all todos
router.route("/todos").get((req, res, next) => {
  Todo.find((err, data) => {
    if (err) {
      return next(err);
    } else {
      res.status(200).json(data);
    }
  });
});
// Get single Todo
router.route("/todo/:id").get((req, res, next) => {
  Todo.findById(req.params.id, (err, data) => {
    if (err) {
      return next(err);
    } else {
      res.status(200).json(data);
    }
  });
});

router.route("/todo/remove/:id").delete((req, res, next) => {
  Todo.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) return next(err);
    else res.status(200).json(data);
  });
});

router.route("/todo/edit/:id").put((req, res, next) => {
  Todo.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, data) => {
      if (err) {
        return next(err);
      } else {
        res.status(200).json(data);
      }
    }
  );
});

module.exports = router;
