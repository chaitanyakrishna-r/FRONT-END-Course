const express = require('express');
const cors = require('cors');

require ('./DB');
const app = express();
app.use(cors());
app.use(express.json());


app.use('/api',(req,res) =>{
    res.send('hello world')
})

app.listen(5000, () => console.log(`App is running at 5000...`));