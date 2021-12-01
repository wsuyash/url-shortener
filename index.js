const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
const ShortUrl = require('./models/shortUrl');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended: false}));

app.get('/', async(req, res) => {
    const shortUrls = await ShortUrl.find();
    return res.render('index', {shortUrls: shortUrls});
});

app.post('/shortUrls', async(req, res) => {
    await ShortUrl.create({full: req.body.fullURL});

    return res.redirect('/');
});

app.get('/:shortUrl', async(req, res) => {
    const shortUrl = await ShortUrl.findOne({short: req.params.shortUrl});

    if(shortUrl == null) {
        return res.status(404);
    }
    shortUrl.clicks++;
    shortUrl.save();
    return res.redirect(shortUrl.full);
});

app.listen(port, function(err){
    if(err) {
        console.log('Error in running the server', err);
    }

    console.log(`Server running on port: ${port}`); 
});