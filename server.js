var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var Q = require('q');
var pug = require('pug');
var fs = require('fs');
var app = express();

var mailer = require('./lib/mailer');
var s3Bucket = require('./lib/s3bucket');

app.use(cors());
app.use(bodyParser.json({ extended: false }));
app.use(express.static(__dirname + "/public/assets"));

app.set('views', './public/views');
app.set('view engine', 'pug');

app.get('/', function(req, res){
	var imgFiles = getFiles('./public/assets/images');

	s3Bucket.getDirectoryFiles('website/').then((urls) =>{
		var cleanUrls = urls.filter(Boolean);
		var GCATGImages = cleanUrls.filter(url => url.indexOf('/images/') > -1);
		var GCATGIVideos = cleanUrls.filter(url => url.indexOf('/video/') > -1);
		console.log('------ ',GCATGImages, GCATGIVideos )
		res.render('index', { GCATGImages, GCATGIVideos });
	});
});

var router = express.Router();
app.use('/sayHello', router);
router.post('/', mailer.sayHello);

app.listen(3650, () => console.log('listening on 3650 '))


function getFiles (dir, files_){
    files_ = files_ || [];
    var files = fs.readdirSync(dir);
    for (var i in files){
        var name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()){
            getFiles(name, files_);
        }else if(!files[i].startsWith('.')) {
			var cleanName = name.replace('./public/assets/', ' ')
        	files_.push(cleanName);
        }
    }
    return files_;
}
