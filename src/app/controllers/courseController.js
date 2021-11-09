const Course = require('../models/Course');
const { multipleMongoToObject, mongoToObject } = require('../../util/mongo')

class courseController {
  //GET /course/:slug
    show(req, res, next){
        Course.findOne({ slug : req.params.slug})
        .then(course =>{
            course = mongoToObject(course);
            res.render('courses/show', {course});
        })
        .catch(next);
    }

    //GET /course/create
    create(req, res, next){
       res.render('courses/create');
    }
  //POST /course/store
  store(req, res, next){
    const c = new Course(req.body);
    c.save()
    .then(()=> res.redirect('/news'))
    .catch(next);
  }

  // GET /course/update
  update(req, res, next){
    Course.findById( req.params.id)
    .then(course=>{
      res.render('courses/update', {course:  mongoToObject(course)});
    })
    .catch(next);
  }

  //PUT /course/:id
  saveUpdate(req, res, next){
    Course.updateOne({_id: req.params.id}, req.body)
    .then(()=>res.redirect('/me/stored/courses') )
    .catch(next);
  }

    //DELETE /course/:id
    delete(req, res, next){
      Course.deleteOne({_id: req.params.id})
      .then(()=>res.redirect('/me/stored/courses') )
      .catch(next);
    }

}
module.exports = new courseController();
