const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const userRouter = require('./routes/CreateUser.js');
const displayRouter = require('./routes/DisplayData.js');
const orderRouter = require('./routes/OrderData.js');

const connectMongo = require('./db');
connectMongo(process.env.MONGO_URL);

app.use(cors());
app.use(express.json());
app.use('/auth/', userRouter);
app.use('/data/', displayRouter);
app.use('/order/', orderRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT}...`);
});
