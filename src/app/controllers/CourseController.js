const Course = require("../models/Course");
const {mongooseArray} = require('../../util/mongoose')
class CourseController {
    show(req, res, next) {
      //[get]/courses/:slug
        console.log(req.params)

        Course.findOne({ slug: req.params.slug})
        .then(course => 
          res.render('courses/show', {course: mongooseArray(course) })
          )
        
        .catch(next);
       
    }

    //[GET]/courses/create 
    create(req, res, next) {
      res.render('courses/create');
       
    }
    //[POST]/courses/store 
    store(req, res, next) {
      res.json(req.body);
       
    }
}

module.exports = new CourseController();