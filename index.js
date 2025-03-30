const express = require('express');
require('./utils/configMapper')();
const config = require('./config');
const routes = require('./routes/route');
const {failedResponse} = require("./utils/responses");

const app = express();

const port = config.port || 5000;

app.use(express.json());

app.use(routes)

app.use((req,res)=>{
    return res.status(404).send(failedResponse("No route found"));
})

app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);
    require('./utils/pool');
})

