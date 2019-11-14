//INIT 
const express = require('express');
const path = require('path');

const app = express();

//Anugular Configuration 
app.use(express.static(path.join(__dirname, '/public/dist/public')));
app.use(express.json());
//Route

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });


//Listener

app.listen(8000, () => {
    console.log('Listening to 8000');
})
