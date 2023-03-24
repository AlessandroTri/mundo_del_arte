const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const obrasSchema = new Schema(
  {
    title: { type: String, required: true },
    artist: { type: String, required: true },
    year: { type: Number, required: true },
    movement: { type: String, required: true },
    medium: { type: String, required: true },
    dimensions: { type: String, required: false }, 
    location: { type: Schema.Types.ObjectId, ref: 'museos'}, 
    image: {type: String, required: true, default: "https://www.touchtaiwan.com/images/default.jpg"},
  },
  {
    timestamps: true,
  }
)


const Obras = mongoose.model('obras', obrasSchema);

module.exports = Obras;