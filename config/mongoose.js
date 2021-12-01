const mongoose = require('mongoose'); // Import mongoose library

mongoose.connect('mongodb://localhost/urlshort', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}); // connect to the db

const db = mongoose.connection; // Acquire connection to the db

// if any error occurs:
db.on('error', console.error.bind(console, 'Error connecting to the db'));

// On success:
db.once('open', function(){
    console.log('Successfully connected to the db');
});

module.exports = db;