const Course = require('../models/Course');
const { multipleMongoToObject } = require('../../util/mongo')

class NewsController {
  //GET /news
  index(req, res, next) {
    Course.find({})
      .then(course =>{
        course = multipleMongoToObject(course);
        res.render('home', {course});
      })
      .catch(error => next(error));
    // Course.find({}, function (error, Courses) {
    //   if(!error){
    //     res.json(Courses);
    //   }else{
    //     next(error);
    //     //res.status(400).json({error: "can not get data course"})
    //   }
    // });



    //res.render('news');
  }
}
module.exports = new NewsController();
