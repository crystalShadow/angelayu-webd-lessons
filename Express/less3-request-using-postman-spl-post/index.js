import express from 'express';

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send("Welcome to My HomePage");
});

app.post('/', (req, res) => {
    res.sendStatus(201);
});//This is the benefit of postman. I don't even have frontend form data ready yet. Still, I'm able to test it using postman.

app.put('/user', (req, res) => {
    res.sendStatus(200);
});

app.patch('/user', (req, res) => {
    res.sendStatus(200);
});

app.delete('/user', (req, res) => {
    res.sendStatus(200);
});
//start a server
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

