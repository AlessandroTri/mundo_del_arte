const Museo = require("./museos.models");

/*
const getMuseos = async (req, res) => {
  try {
    const allMuseos = await Museo.find().populate('works');
    console.log('museos' + allMuseos)
    return res.status(200).json(allMuseos);
  } catch (error) {
    return res.status(500).json(error);
  }
};
*/

const getMuseos = async (req, res) => {
  try {
    let { page, limit } = req.query;
    console.log(req.query)
    const numMuseos = await Museo.countDocuments();
    limit = limit ? parseInt(limit) : 10;
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