const newRouter = require('./news');
const meRouter = require('./me');
const CoursesRouter = require('./courses');
const siteRouter = require('./site');
function route(app) {
  
    app.use('/news', newRouter);
    app.use('/me', meRouter);
    app.use('/courses', CoursesRouter);
    app.use('/', siteRouter);
      
      // app.get('/search', (req, res) => {
      //   // console.log(req.query.q);
      //   res.render('search');
      // });
      // app.post('/search', (req, res) => {
      //   // console.log(req.query.q);
      
      //   console.log(req.body);
      //   res.send(' ');
      // });
}
module.exports = route;