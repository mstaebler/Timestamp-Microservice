const express = require('express'),
      app = express(),
      path = require('path'),
      morgan = require('morgan'),
      validate = require('./validate');

app.listen(process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, '../public')));
app.use(morgan('common'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/:timestamp', (req, res, next) => {
    return res.json(validate(req.params.timestamp));
});

app.use(function(err, req, res, next) {
      res.error = err;
      res.status(err.status || 500);
      res.json({
          message: err.message
      });
      next(err);
  });
