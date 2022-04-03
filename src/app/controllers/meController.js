const Course = require("../models/Course");
const {mutipleMongooseToObject} = require('../../util/mongoose')
class meController {
    //[GET]/me/stored/courses
    storedCreate(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
        .then(([courses, deleteCount])=>
            res.render('me/stored-courses', {
                deleteCount,
                courses:mutipleMongooseToObject(courses)
            })
        )
        .catch(next);

    //     Course.countDocumentsDeleted()
    //     .then((deleteCount) => {
    //         console.log(deleteCount);
    //     })
    //     .catch(()=>{})
    //     Course.find({})
    //     .then(courses => res.render('me/stored-courses', {
    //         courses:mutipleMongooseToObject(courses)
    //     }))
    //     .catch(next);
        
 }

    trashCourses(req, res, next){
        Course.findDeleted({})
        .then(courses => res.render('me/trash-courses', {
            courses:mutipleMongooseToObject(courses)
        }))
        .catch(next);
    }
}

module.exports = new meController();