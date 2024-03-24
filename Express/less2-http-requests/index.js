//Request Vocab
//1. GET - Request resource
//2. POST - Sending a resource to the server, like a form data when you click submit
//3. PUT, PATCH - Update methods. PUT updates by replacing the resource completely but PATCH just repairs or patches the old one like its name.
//4. DELETE - Deletes a resource

import express from 'express';

const app = express();

const port = 3000;

app.get('/',(req,res)=>{
    console.log(req.rawHeaders);
    res.send("<h1>Hey, You are at my homepage</>");
});

app.get('/about',(req,res)=>{
    res.send("My Name is Shashank Shekhar. I'm a tech enthusiast!")
});

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});
