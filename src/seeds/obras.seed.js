const mongoose = require('mongoose');
const Obras = require('../api/obras/obras.models');
const dotenv = require('dotenv').config();
const DB_URL = process.env.DB_URL;


const obras = [
  {
    title: 'Las Meninas',
    artist: 'Diego Velázquez',
    year: 1656,
    movement: "Baroque",
    medium: 'Oil on canvas',
    dimensions: "320x276cm",
    location: '',
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/David_Teniers_d._J._008.jpg/640px-David_Teniers_d._J._008.jpg",
  },
  {
    title: 'Saturno devorando a su hijo',
    artist: 'Francisco de Goya',
    year: 1823,
    movement: "Romanticism",
    medium: 'Oil on plaster transferred to canvas',
    dimensions: "143x81cm",  
    location: '',
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/David_Teniers_d._J._008.jpg/640px-David_Teniers_d._J._008.jpg",
  },
  {
    title: "El Jardín de las Delicias",
    artist: "Hieronymus Bosch",
    year: 1510,
    movement: "Northern Renaissance",
    medium: "Oil on panel",
    dimensions: "220x389cm",
    location: '',
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/David_Teniers_d._J._008.jpg/640px-David_Teniers_d._J._008.jpg",
  },
  {
    title: "Ritmo de otoño (número 30)",
    artist: "Jackson Pollock",
    year: 1950,
    movement: "Abstract Expressionism",
    medium: "Oil on canvas",
    dimensions: "266x525cm",
    location: '',
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/David_Teniers_d._J._008.jpg/640px-David_Teniers_d._J._008.jpg",
  },
  {
    title: "Autorretrato con sombrero de paja",
    artist: "Vincent van Gogh",
    year: 1887,
    movement: "Post-Impressionism",
    medium: "Oil on canvas",
    dimensions: "40x31cm",
    location: '',
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/David_Teniers_d._J._008.jpg/640px-David_Teniers_d._J._008.jpg",
  },
  {
    title: "Retrato de Juan de Pareja",
    artist: "Diego Velázquez",
    year: 1650,
    movement: "Baroque",
    medium: "Oil on canvas",
    dimensions: "81x69cm",
    location: '',
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/David_Teniers_d._J._008.jpg/640px-David_Teniers_d._J._008.jpg",
  },
  {
    title: "La Gioconda",
    artist: "Leonardo da Vinci",
    year: 1506,
    movement: "Italian Renaissance",
    medium: "Oil on poplar panel",
    dimensions: "77x53cm",
    location: '',
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/David_Teniers_d._J._008.jpg/640px-David_Teniers_d._J._008.jpg",
  },
  {
    title: "La Libertad guiando al pueblo",
    artist: "Eugène Delacroix",
    year: 1830,
    movement: "Romanticism",
    medium: "Oil on canvas",
    dimensions: "260x325cm",
    location: '',
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/David_Teniers_d._J._008.jpg/640px-David_Teniers_d._J._008.jpg",
  },
  {
    title: "La balsa de la Medusa",
    artist: "Théodore Géricault",
    year: 1819,
    movement: "Romanticism",
    medium: "Oil on canvas",
    dimensions: "491x716cm",
    location: '',
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/David_Teniers_d._J._008.jpg/640px-David_Teniers_d._J._008.jpg",
  },
  {
    title: "Guernica",
    artist: "Pablo Picasso",
    year: 1937,
    movement: "Cubism",
    medium: "Oil on canvas",
    dimensions: "349x776cm",
    location: '',
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/David_Teniers_d._J._008.jpg/640px-David_Teniers_d._J._008.jpg",
  },
  {
    title: "Un mundo",
    artist: "Ángeles Santos",
    year: 1929,
    movement: "Surrealism",
    medium: "Oil on canvas",
    dimensions: "61x46cm",
    location: '',
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/David_Teniers_d._J._008.jpg/640px-David_Teniers_d._J._008.jpg",
  },
  {
    title: "El Gran Masturbador",
    artist: "Salvador Dalí",
    year: 1929,
    movement: "Surrealism",
    medium: "Oil on canvas",
    dimensions: "110x150cm",
    location: '',
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/David_Teniers_d._J._008.jpg/640px-David_Teniers_d._J._008.jpg",
  }

  ];


mongoose.set("strictQuery",true);

mongoose
  .connect(DB_URL)
  .then(async () => {
    const obras = await Obras.find();
    if (obras.length > 0) {
      await Obras.collection.drop(); 
      console.log("Obra eliminados");
    }
  })
  .catch((error) => console.log("Ha habido un error para crear una Obra", error))
  .then(async () => {
    await Obras.insertMany(obras);
    console.log("Obra añadidos");
  })
  .finally(() => mongoose.disconnect());