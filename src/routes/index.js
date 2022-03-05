const newRouter = require('./news');
const siteRouter = require('./site');
function route(app) {
    // app.get('/', (req, res) => {
    
    //     res.render('home');
    //   });
      
    //   app.get('/news', (req, res) => {
    //     // console.log(req.query.q);
    //     res.render('news');
    //   });

    app.use('/news', newRouter);

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