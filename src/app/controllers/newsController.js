const Course = require('../models/Course');


class NewsController {
  //GET /news
  index(req, res) {
    Course.find({}, function (error, Courses) {
      if(!error){
        res.json(Courses);
      }else{
        res.status(400).json({error: "can not get data course"})
      }
    });

    //res.render('news');
  }
}
module.exports = new NewsController();
