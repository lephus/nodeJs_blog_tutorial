const newsRouter = require('./news');
const courseRouter = require('./course');
const meRouter = require('./me');
function route(app) {
  app.get('/', (req, res) => {
    res.send('WELCOME TO NODEJS');
  });

  app.use('/news', newsRouter);

  app.use('/course', courseRouter);

  app.use('/me', meRouter);
}

module.exports = route;
