var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// resume
router.get('/resume.html', function (req, res, next) {
    res.render('resume/index');
});

// resume
router.get('/portfolio.html', function (req, res, next) {
    res.render('portfolio/index');
});

router.get('/blog.html', function (req, res, next) {
    res.render('blog/index');
});

router.get('/contact.html', function (req, res, next) {
    res.render('contact/index');
})

module.exports = router;
