const express = require('express');
const morgan = require('morgan');
const path = require('path');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./routes/index');
const db = require('./config/db/index');

// connect mongo db
db.connect();

app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());
app.use(morgan('combined'));
app.engine('hbs', handlebars({
   extname: '.hbs',
   helpers: {
     sum: (a, b)=> a+b,
   }
  
  }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

// route Init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
