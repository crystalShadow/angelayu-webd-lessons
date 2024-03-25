import express from 'express';
import {dirname} from 'path';
import {fileURLToPath} from 'url';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.use(bodyParser.urlencoded({extended : true}));


app.post('/check', (req, res) => {
    if(req.body.password == "ILoveProgramming"){
        res.sendFile(__dirname + "/public/secrets.html");
    }
    else{
        res.send("Your password was incorrect. Please try again!");
    }
    
});
    


app.listen(port, () => {
    console.log(`server started on port ${port}`);
});

