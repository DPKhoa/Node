const express = require('express');
const app = express();
const port = 3000;
var morgan = require('morgan');
const { engine } = require ('express-handlebars');
const path = require('path');
const { query } = require('express');

const route = require('./routes');
const db = require('./config/db')

//Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
  //HTTP logger
  app.use(morgan('combined'));


app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());


//Template Engine
app.engine('hbs', engine({
  extname:".hbs"

}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
// console.log('PATH:', path.join(__dirname, 'resources/views'));



//routes init

route(app);



app.listen(port, () => {
  console.log(`App listening on port  at http://localhost:${port}`);
});