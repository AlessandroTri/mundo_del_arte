const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const museoSchema = new Schema(
    {
      name: { type: String, required: true },
      location: { type: String, required: true },
      description: { type: String, required: true },
      works:[{ type: Schema.Types.ObjectId, ref: 'obras' }],
      foundation: { type: Number, required: true },
      image: {type: String, required: false},
    },
    {
      timestamps: true,
    }
  )


  const Museo = mongoose.model('museos', museoSchema);

  module.exports = Museo;