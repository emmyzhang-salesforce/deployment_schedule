var info = require('../mock/payload.json');

//root route
exports.index = function(req, res){
	res.render('index', {
		title: 'Home',
		className: 'home'
	});
}

// about route
exports.about = function(req, res){
	res.render('about', {
		title: 'About',
		className: 'about'
	});
}

// posts route -- displays payload from payload.json
exports.posts = function(req, res){
	res.render('posts', {
		title: 'Posts', 
		className: 'posts',
		data: info
	});
}
  // var id = req.params.id;
  // if(id === undefined) {
  //   res.status(503);
  // } else {
  //   console.log(sprints[id]);
  //   var sprint = sprints[id];
  //   res.render('posts', sprint);
  // }