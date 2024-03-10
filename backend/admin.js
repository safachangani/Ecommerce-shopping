const mongoose= require('mongoose')

const Schema = mongoose.Schema

const itemSchema = new Schema({
    name: String,
    description: String,
    category: String,
    price: Number,
    imageUrl: String
  });
const wardrobe= mongoose.model('wardrobe', itemSchema);

module.exports = wardrobe;