const express = require('express');

const router = express.Router();
const getAllCourses = () => {};

module.exports = (coursesCollection) => {
  router.get('/', getAllCourses(coursesCollection));
  return router;
};
