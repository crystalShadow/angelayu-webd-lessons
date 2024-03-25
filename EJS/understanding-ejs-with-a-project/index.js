import express from 'express';
import bodyParser from 'body-parser';
import {dirname} from 'path';
import {fileURLToPath} from 'url';

const app = express();

const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));


app.use(bodyParser.urlencoded({extended : true}));

const d = new Date();
const day = d.getDay();

var var1;
var var2;
if(day === 0 || day === 6){
     var1 = "the weekend";
     var2 = "have fun";
}
else{
     var1 = "a weekday";
     var2 = "work hard";
}


app.get('/', (req, res) => {
    res.render(__dirname + "/public/index.ejs", {string1 : var1, string2 : var2});
});

//console.log(day);

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});