const Museo = require("./museos.models");
const { deleteFile } = require("../../middlewares/delete.file");
const {ObjectId} = require("mongodb");


const getMuseos = async (req, res) => {
  try {
    let { page, limit } = req.query;
    console.log(req.query)
    const numMuseos = await Museo.countDocuments();
    limit = limit ? parseInt(limit) : 20;
    if (page && !isNaN(parseInt(page))) {
      console.log("entro")
      page = parseInt(page);
      console.log(page)
      let numPages = numMuseos % limit > 0 ? numMuseos / limit + 1 : numMuseos / limit;
      if (page > numPages) page = numPages;
      if (page < 1) page = 1;
      const skip = (page - 1) * limit;
      const Museos = await Museo.find().skip(skip).limit(limit).populate('works')
      return res.status(200).json(
        {
          info: {
            numTotal: numMuseos,
            page: page,
            limit: limit,
            nextPage: numPages >= page + 1 ? `/museos?page=${page + 1}&limit=${limit}` : null,
            prevPage: page != 1 ? `/museos?page=${page - 1}&limit=${limit}` : null
          },
          results: Museos
        }
      )
    } else {
      const Museos = await Museo.find().limit(limit).populate('works');
      return res.status(200).json({
        info: {
          numTotal: numMuseos,
          page: 1,
          limit: limit,
          nextPage: numMuseos > limit ? `/museos?page=2&limit=${limit}` : null,
          prevPage: null
        },
        results: Museos
      });
    }

  } catch (error) {
    console.log(error)
    return res.status(500).json(error);
  }
};

const postMuseos = async (req, res) => {
  try {
    const objectId = new ObjectId(req.params.location);
    let { name, location, description, works, foundation, image } = req.body;
    let newMuseos = new Museo({ name, location, description, works, foundation, image });
    if (req.file) {
      newMuseos.image = req.file.path;
      location = objectId;
    }
    const createdMuseos = await newMuseos.save().populate('works');
    return res.status(201).json(createdMuseos);
  } catch (error) {
    return res.status(500).json(error);
  }
};


const putMuseos = async (req, res) => {
  try {
      const {id} = req.params;
      const putMuseos = new Museo(req.body);
      putMuseos._id = id;

      if(req.file) {
          putMuseos.image = req.file.path;
      }

      const updateMuseos = await Museo.findByIdAndUpdate(id, putMuseos);
      if (updateMuseos.image) {
          deleteFile(updateMuseos.image);
      }
      if (!updateMuseos) {
        return res.status(404).json({ message: "Museos not found" });
      }
      return res.status(200).json(updateMuseos);
  } catch (error) {
      return res.status(500).json(error)
  }
}


const deleteMuseos = async (req, res) => {
  try {
      const {id} = req.params;
      const deleteMuseos = await Museo.findByIdAndDelete(id);
      if (!deleteMuseos) {
          return res.status(404).json({message: "Museo not found"});
      }
      if (deleteMuseos.image) {
          deleteFile(deleteMuseos.image);
      }
      return res.status(200).json(deleteMuseos);
  } catch (error) {
      return res.status(500).json(error)
  }
}




module.exports = { getMuseos, postMuseos, putMuseos, deleteMuseos };