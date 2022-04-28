const express = require('express');
const insultos =  require('./models/insulto');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  let insulto = new insultos();
  res.send(insulto.generarInsulto());
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})