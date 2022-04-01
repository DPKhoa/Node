const Course = require("../models/Course");
const {mongooseArray, mutipleMongooseToObject} = require('../../util/mongoose')
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
      console.log(req.body)
      const formData = req.body;
      formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
      const course = new Course(formData);
      course.save()
        .then(() => res.redict (``))
        .catch(error => {
          
        })
      
       
    }
//[GET]/courses/:id/edit
    edit(req, res, next) {
      Course(req.params.id)
      .then(course => res.render('courses/edit',{
        course: mongooseArray(course),
      }),
      )
      .catch(next)
       
    }

    //[PUT]/courses/:id
    update(req, res, next) {
      Course.updateOne({_id: req.params.id}, req.body)
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next);
    }
     //[DELETE]/courses/:id
    destroy(req,res, next){
        Course.deleteOne({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next)
      }
}

module.exports = new CourseController();