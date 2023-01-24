const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


// const exercisesRouter = require('./routes/exercises');
// const usersRouter = require('./routes/users');
const sendMessageRouter = require('./routes/sendMessage');
const getPictureRouter = require('./routes/addPicture');
const nhieRouter = require('./routes/addNhie');
// const updatePatientRouter = require('./routes/updatePatient');

// app.use('/exercises',exercisesRouter);
// app.use('/users',usersRouter);
app.use('/sendMessage',sendMessageRouter);
app.use('/addPicture',getPictureRouter);
app.use('/nhie',nhieRouter);
// app.use('/updatePatient',updatePatientRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});