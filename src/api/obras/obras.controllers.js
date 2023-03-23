const Obras = require("./obras.models");

const getObras = async (req, res) => {
try {
    const allObras = await Obras.find(); 
    return res.status(200).json(allObras);
 } catch (error) {
        return res.status(500).json(error);
      }
};

const postObras = async (req, res) => {
    try {
      console.log(req.body);
      const { title, artist, year, movement, medium, dimensions, location, image } = req.body;
      const newObras = new Obras({ title, artist, year, movement, medium, dimensions, location, image}); 
  
      const createdObras = await newObras.save(); 
      return res.status(201).json(createdObras);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  const putObras = async (req, res) => {
    try {
      const {id} = req.params;
      const putObras = new Obras(req.body);
      putObras._id = id;
  
      const updateObras = await Obras.findByIdAndUpdate(id, putObras, {new: true}); 
      if(!updateObras) {    
      return res.status(404).json({ message: "Obras not found" });
      } 
      return res.status(200).json(updateObras);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  const deleteObras = async (req, res) => {
    try {
      const {id} = req.params;
      const deleteObras = await Obras.findByIdAndDelete(id); 
      if(!deleteObras) {   
      return res.status(404).json({ message: "Obras not found" });
      } 
    } catch (error) {
      return res.status(500).json(error);
    }
  };



  module.exports = {getObras, postObras, putObras, deleteObras};