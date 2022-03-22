const Course = require("../models/Course");
const {mutipleMongooseToObject} = require('../../util/mongoose')
class siteController {

    //[GET]/home
    index(req, res, next) {
      Course.find({})
      .then(courses => {
        res.render('home', {
          courses: mutipleMongooseToObject(courses)
        });
       
      })
      .catch(next);
    }
    

    //[GET]/search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new siteController();