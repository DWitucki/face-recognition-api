const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const app = express();
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'postgres',
    password : '123',
    database : 'face-recognition'
  }
});


app.use(cors());
app.use(bodyParser.json());


app.get('/', (req, res) => res.send(database.users))

app.post('/signin', signin.handleSignin(db, bcrypt))

app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })

app.put('/image', (req, res) => { image.handleImage(req, res, db) })

app.post('/imageurl', (req, res) => { image.handleApiCall(req, res) })

app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db) })

 
app.listen(3001, () => {
	console.log('app is runing on port 3001');
})


