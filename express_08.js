var express = require('express'),
        fs = require('fs');

var app = express();

app.get('/books', function (req, res) {
        fs.readFile(process.argv[3], 'utf8', function (err, data) {
                res.json(JSON.parse(data));
        });
});
/*      Official Solution
app.get('/books', function(req, res){
      var filename = process.argv[3]
      fs.readFile(filename, function(e, data) {
        if (e) return res.sendStatus(500)
        try {
          books = JSON.parse(data)
        } catch (e) {
          res.sendStatus(500)
        }
        res.json(books)
      })
    })
*/
app.listen(process.argv[2]);
