const mongoose = require('mongoose');
var admin = require("firebase-admin");
const dotenv = require('dotenv');

dotenv.config();

var serviceAccount = require("./assets/ave.json");

const dbFirebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

console.log('Firebase conectada');

const db = admin.firestore();
const queryChat = db.collection('chat')


const mongoDB = mongoose.connect(process.env.MONGO_URL,{
  useNewUrlParser: true,
  useUnifiedTopology:true
})
    .then(dbCon => console.log('base de datos MONGO conectada'))
    .catch(err => console.log(err));

module.exports = {queryChat, dbFirebase, mongoDB};