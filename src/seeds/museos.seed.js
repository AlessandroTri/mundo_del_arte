const mongoose = require('mongoose');
const Museo = require('../api/museos/museos.models');
const dotenv = require('dotenv').config();
const DB_URL = process.env.DB_URL;


const museos = [
    {
      name: "Museo del Prado",
      location: "Madrid, España",
      description:"Housed in a stately 18th-century building, it offers a unique glimpse into the historical ups and downs of the Spanish soul; imperious in Velázquez's royal portraits, turbulent in Goya's Black Paintings. The Prado (www.museodelprado.es) would already be among the best art galleries in Europe solely for its collection of Spanish masters, from El Greco to Zurbarán, but the pieces by painters from the rest of Europe that it treasures, from Rembrandt to Rubens, Brueghel or Bosch, further expands the list of masterpieces that its collection accumulates.",
      works: [
        "641c2016f8d8dd132db1e426",
        "641c2016f8d8dd132db1e427",
        "641c2016f8d8dd132db1e428",
      ],
      foundation: 1819,
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/David_Teniers_d._J._008.jpg/640px-David_Teniers_d._J._008.jpg",
    },
    {
      name: "Museo Metropolitano de Arte",
      location: "Nueva York, Estados Unidos",
      description:"The Metropolitan Museum's (www.metmuseum.org) ability to excite, engage and inspire has made it one of the most popular museums in the world. Six million people each year view its collections of Egyptian art, European and American paintings, ancient Greek sculpture, African and Oceanic masks, and medieval weapons. It is an autonomous and complete cultural entity in itself. The highlight is the rooftop garden, with sculptures and spectacular views of Central Park.",
      works: [
        "641c2016f8d8dd132db1e429",
        "641c2016f8d8dd132db1e42a",
        "641c2016f8d8dd132db1e42b",
      ],
      foundation: 1870,
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/David_Teniers_d._J._008.jpg/640px-David_Teniers_d._J._008.jpg",
    },
    {
      name: "Museo del Louvre",
      location: "París, Francia",
      description:"Among the thousands of museums in the world, there are some that no traveler fails to visit. Like the 20 most sought-after, which are part of the ranking of 'The 500 best places in the world to travel' prepared by Lonely Planet travel experts. It is true that many of these millions of tourists visit the Louvre Museum every year, the first on the list, in search of the Mona Lisa, by Leonardo da Vinci, and the Venus de Milo. Then, they wander aimlessly through this enormous art gallery full of artistic wonders housed in a 12th century building that is almost as interesting as the exhibitions it hosts. The glass pyramid, by Ieoh Ming Pei, was widely criticized when it was installed, but that juxtaposition of ultramodern architecture with the historical backdrop reflects the eclectic selection of 35,000 international works of art and antiquities that can be found inside the Louvre (www.louvre.fr).",
      works: [
        "641c2016f8d8dd132db1e42c",
        "641c2016f8d8dd132db1e42d",
        "641c2016f8d8dd132db1e42e",
      ],
      foundation: 1793,
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/David_Teniers_d._J._008.jpg/640px-David_Teniers_d._J._008.jpg",
    },
    {
      name: "Museo Nacional Centro de Arte Reina Sofía",
      location: "Madrid, España",
      description:"The Museo Nacional Centro de Arte Reina Sofía is one of the art galleries that form the triangle of Madrid art together with the Museo Nacional del Prado and the Museo Nacional Thyssen-Bornemisza. It is a must-see for art lovers visiting the capital as it displays, in addition to Pablo Picasso's Guernica, a large collection of works by contemporary artists such as Dalí, Miró and Juan Gris. The three itineraries proposed by this museum are 'The irruption of the 20th century: utopias and conflicts (1900-1945)'; 'Is the war over? Art in a divided world (1945-1968)'; and 'From revolt to postmodernity (1962-1982)'. Those who don't have much time to spare can turn to the museum's selection of the 80 works it considers indispensable. ",
      works: [
        "641c2016f8d8dd132db1e42f",
        "641c2016f8d8dd132db1e430",
        "641c2016f8d8dd132db1e431",
      ],
      foundation: 1992,
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/David_Teniers_d._J._008.jpg/640px-David_Teniers_d._J._008.jpg",
    },
  ];


mongoose.set("strictQuery",true);

mongoose
  .connect(DB_URL)
  .then(async () => {
    const museos = await Museo.find();
    if (museos.length > 0) {
      await Museo.collection.drop(); 
      console.log("Museo eliminados");
    }
  })
  .catch((error) => console.log("Ha habido un error para crear un museo", error))
  .then(async () => {
    await Museo.insertMany(museos);
    console.log("Museo añadidos");
  })
  .finally(() => mongoose.disconnect());