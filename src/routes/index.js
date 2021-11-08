const newsRouter = require('./news');

function route(app) {
  app.get('/', (req, res) => {
    res.send('WELCOME TO NODEJS');
  });

  app.use('/news', newsRouter);
}

module.exports = route;
