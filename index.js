const express = require('express');
const cors = require('cors');

const phones = require('./phones.json');
const app = express();
const port = 5000;

app.use(cors());

app.get('/',(req,res)=>{
    res.send('my first ever server will be better')
});

app.get('/phones', (req, res)=>{
    res.send(phones);
});
app.get('/phones/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    console.log('I need data for', id);
    const phone = phones.find(phone => phone.id===id) || {};
    res.send(phone);
});

app.listen(port, ()=>{
    console.log(`My first server running on port ${port}`);
});