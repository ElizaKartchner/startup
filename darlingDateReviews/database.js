const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
  throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
const userCollection = client.db('darling').collection('user');
const dateIdeasCollection = client.db('darling').collection('dateIdeas');

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

function addDateIdea(idea) {
  dateIdeasCollection.insertOne(idea);
}

function getDateIdeas() {
  const query = dateIdeasCollection.find();
  return query.toArray();
}

function updateLikes(newIdea) {
  updateIdea = JSON.parse(JSON.stringify(newIdea));
  dateIdeasCollection.deleteOne(updateIdea);
  newIdea['likes'] = newIdea.likes + 1;
  dateIdeasCollection.insertOne(newIdea);
  //updateIdea = JSON.parse(JSON.stringify(newIdea));
  //updateIdea['likes'] = updateIdea.likes + 1;
  //let newValues = { $set: updateIdea };
  //dateIdeasCollection.updateOne(newIdea, newValues);
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  addDateIdea,
  getDateIdeas,
  updateLikes,
};
