const express = require('express');

const router = expres.Router();

module.exports = (coursesCollection) => {
  router.get('/', getAllCourses(coursesCollection));
  return router;
};

const getAllCourses = () => {};
