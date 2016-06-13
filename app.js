var express = require('express');
var app = express();
var routes = require('./routes');

app.set('view engine', 'ejs');
// app.set('views', __dirname + '/views');

// var sprints = require('./mock/sprints.json');
var info = require('./mock/payload.json');

app.locals.pagetitle = "Awesome Website "; // for all pages

app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/posts', routes.posts);

// default route
app.get('*', function(req, res){
  res.send('Bad route :(');
});

// 404 error
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   //next(err);
//   res.render('error', {
//     message: err.message,
//     error: err
//   });
// });

app.listen(process.env.PORT || 3030, function(){
  console.log("The frontend server is running on port 3030");
});
