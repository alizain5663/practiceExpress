const mongoose = require('mongoose');

mongoose.connect(`${process.env.DATA_BASE_URI}`, { useNewUrlParser: true, useUnifiedTopology: true }, (error,connection) => {
    if (!error) {
        console.log(`\nMogoDb Connected Successfuly at MongoAtlas with Database Name E-commerce DataBase\n`);
      
    }
    else { console.log('Error: Not Connected to the MongoDb' + error) }
});
