const express = require('express')
const app = express()
const port = 3000
const connectDB = "mongodb+srv://rc:rchris@basereef.bbdjc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const mongoose = require('mongoose');
const tankRouter = require("./routes/tankRoutes.js");

mongoose.connect(connectDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB Connected…')
})
.catch(err => console.log(err))

app.use(tankRouter);

app.get('/', (req, res) => {
  res.send('Hello!')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})