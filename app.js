const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

//Middleware

app.use(express.json());

// routes 
app.use('/api/v1/tasks', tasks);




const port = 3000;
app.listen(port, console.log(`server is listening on port ${port}`));