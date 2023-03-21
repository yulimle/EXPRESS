const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =
  'mongodb+srv://yulim516:qwer1234@cluster0.tlox8mr.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

module.exports = client;
