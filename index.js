const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const {connect} = require('./src/utils/database');
const routerMuseo = require('./src/api/museos/museos.routers');
const routerObras = require('./src/api/obras/obras.routers');
const routerUser = require('./src/api/users/users.routers');

const PORT = process.env.PORT || 5000;  

cloudinary.config(
    {
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_KEY,
        api_secret: process.env.CLOUDINARY_SECRET
    }
)

const app = express();

app.use((req, res , next) => {
    res.header('Access-Control-Allow-Method', 'POST, GET, DELETE, PUT, PATCH'); 
    res.header('Access-Control-Allow-Credentials', 'true'); 
    res.header('Access-Control-Allow-Headers', 'Content-Type'); 
    next(); 
})

app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:4200", "http://nombre.vercel.com", "http://localhost:5000", "http://localhost:8000", "http://127.0.0.1:5500"],
    credentials: true
}))




app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/museos', routerMuseo);
app.use('/obras', routerObras);
app.use('/user', routerUser);

connect();

app.use('*', (req, res) => {
    res.status(404).json('Route not found');    
})

app.listen (PORT, () => console.log(`listening on: http://localhost:${PORT}`));

