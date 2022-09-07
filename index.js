import express from 'express'

const app = express()

app.get('/apples', function(req, res) {

    res.send('7 apples');
  });


let PORT = process.env.PORT || 4003;

app.listen(PORT, function(){
    console.log('App starting on port', PORT);
  });

//res.json({name: 'fuki' }) when we build api's
// GET & POST req.params
// GET & POST req.query
// POST req.body