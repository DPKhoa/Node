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
}

module.exports = new CourseController();