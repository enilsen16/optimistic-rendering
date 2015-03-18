var express = require('express');
var mongoose = require('mongoose');
var Comment = mongoose.model('comments');
var router = express.Router();

router.get('/', function(req, res) {
  Comment.find(function(err, comments) {
    console.log(comments);
    res.render(
      'form',
      { title : 'My funky form', comments : comments }
    );
  });
});

router.post('/', function(req, res) {
  new Comment({ title: req.body.comment })
  .save(function(err, comment) {
    console.log(comment);
    res.redirect('form');
  });
});

module.exports = router;
