const Museo = require("./museos.models");

const getMuseos = async (req, res) => {
  try {
    const allMuseos = await Museo.find().populate('works');
    console.log('museos' + allMuseos)
    return res.status(200).json(allMuseos);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postMuseos = async (req, res) => {
  try {
    console.log(req.body);
    const { name, location, description, works, foundation, image } = req.body;
    const newMuseos = new Museo({ name, location, description, works, foundation, image });
    const createdMuseos = await newMuseos.save().populate('works');
    return res.status(201).json(createdMuseos);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putMuseos = async (req, res) => {
  try {
    const { id } = req.params;
    const putMuseos = new Museo(req.body);
    putMuseos._id = id;

    const updateMuseos = await Museo.findByIdAndUpdate(id, putMuseos, {new: true}).populate('works');
    if (!updateMuseos) {
      return res.status(404).json({ message: "Museo not found" });
    }
    return res.status(200).json(updateMuseos);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteMuseos = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteMuseos = await Museo.findByIdAndDelete(id).populate('works');
    if (!deleteMuseos) {
      return res.status(404).json({ message: "Museo not found" });
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};



module.exports = { getMuseos, postMuseos, putMuseos, deleteMuseos };