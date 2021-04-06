const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const port =process.env.PORT || 1212
const path = require('path');
const db = require('./config/index');
const router = require('./routers/index_rts');


db.connectWithDB();
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars',handlebars());
app.set('view engine','handlebars');
app.set('views',path.join(__dirname,'resources','views'));
router(app);
function sub(x, y, cb) {
    process.nextTick(function() {
    cb(x - y);
    });
    }
    console.log(sub(2, 3, console.log));

app.listen(port,()=>{
    console.log(`App listening at http://localhost:${port}`);
});
