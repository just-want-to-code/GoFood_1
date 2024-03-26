const mongoose = require('mongoose');
const response = require('./foodData2.json');
const response2 = require('./foodCategory.json');
const { Schema } = mongoose;

const connectMongo = async (mongoURL) => {
  await mongoose
    .connect(mongoURL)
    .then(async () => {
      console.log('Database is connected');

      //const foodSchema = new Schema({}, { strict: false });

      //const foodModel = mongoose.model('food_items', foodSchema);
      //const response = await foodModel.find({});

      //const categoryModel = mongoose.model('food_categories', foodSchema);
      //const response2 = await categoryModel.find({});

      global.food_items = response;
      global.foodCategory = response2;
    })
    .catch((error) => console.log('Database Connection error!'));
};

module.exports = connectMongo;
