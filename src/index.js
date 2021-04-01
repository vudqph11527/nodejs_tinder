const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const port = process.env.port || 8080;
const path = require('path');
const router = require('./routers/index_rts');


app.engine('handlebars',handlebars());
app.set('view engine','handlebars');
app.set('views',path.join(__dirname,'resources','views'));

router(app);
app.listen(port,(req,res)=>{
    console.log(`App listening at http://localhost:${port}`);
})