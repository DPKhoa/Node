const Course = require("../models/Course");
const {mutipleMongooseToObject} = require('../../util/mongoose')
class meController {

    
    
    //[GET]/me/stored/courses
    storedCreate(req, res, next) {
        Course.find({})
        .then(courses => res.render('me/stored-courses', {
            courses:mutipleMongooseToObject(courses)
        }))
        .catch(next);
        
    }
}

module.exports = new meController();