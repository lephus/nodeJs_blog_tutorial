const Course = require('../models/Course');
const { multipleMongoToObject } = require('../../util/mongo')

class MeController {
  //GET /me/stored/courses
  storedCourse(req, res, next) {
    Course.find({})
      .then(course =>{
        course = multipleMongoToObject(course);
        res.render('me/stored-course', {course});
      })
      .catch(error => next(error));
  }
}
module.exports = new MeController();
