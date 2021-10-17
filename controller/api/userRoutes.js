const Path = require('Path');
const router = require('express').Router();

router.get("/", function(req, res) {
    res.sendFile(Path.join (__dirname, "./Public/index.html"));

});

router.get("/", function(req, res) {
    res.sendFile(Path.join (__dirname, "./public/exercise.html"));

});

router.get("/", function(req, res) {
    res.sendFile(Path.join (__dirname,"/Public/stats.html"));

});


module.exports = router