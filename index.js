var express = require('express');
var app = express();
var fs = require('fs');
var request = require('request');



var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

download('https://picsum.photos/2000/1000', 'immagine.jpg', function(){
  console.log('TIENI VECCHIO DI MERDA');
});
