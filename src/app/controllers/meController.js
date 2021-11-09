const Course = require('../models/Course');
const { multipleMongoToObject } = require('../../util/mongo')

class MeController {
  //GET /me/stored/courses
  storedCourse(req, res, next) {
    
    Promise.all([ Course.find({}),  Course.countDocumentsDeleted() ])
    .then(([]))


    Course.countDocumentsDeleted()
    .then((deleteCount) =>{
      console.log(deleteCount);
    })
    .catch(error => next(error));



    Course.find({})
      .then(course =>{
        course = multipleMongoToObject(course);
        res.render('me/stored-course', {course});
      })
      .catch(error => next(error));
  }

  // GET /me/trash/courses
  trashCourse(req, res, next){
    Course.findDeleted({})
    .then(course =>{
      course = multipleMongoToObject(course);
      res.render('me/trash-course', {course});
    })
    .catch(error => next(error));
  }

}
module.exports = new MeController();
