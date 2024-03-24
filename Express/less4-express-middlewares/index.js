//middleware perform some operations on the requests sent by client before sending it to the final destination
//for e.g. to requests can be malicious as well so its essential to filter those. That is where middleware comes in to help.
import express from'express';
import bodyParser from 'body-parser';
import {dirname} from 'path';
import {fileURLToPath} from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.use(bodyParser.urlencoded({extended : true}));//this was wrong so undefined came in the req.body

app.post('/my-handling-form-page', (req, res) => {
    res.send(`<h1>Welcome ${req.body.user_name}.</h1> <br> <h2>Your Message was : ${req.body.user_message}</h2> <br> <h3>Message has been conveyed to the admin. Thanks for reaching out!</h3>`);
    //console.log(req.body);
});

app.listen(port, (req, res) => {
    console.log(`server running on port ${port}`);
});

