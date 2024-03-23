//Six steps to create a server
//Step 1 : Create directory
//Step 2 : Create index.js file
//Step 3 : initialise npm
//Step 4 : Install the express package
//Step 5 : Write Server application in index.js
//Step 6 : Start Server
import express from 'express';

//testing git add

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
  });
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });

  //This creates a server which keeps listening on port 3000 and when we hit 3000 on the specified route. Server responds "Hello World"