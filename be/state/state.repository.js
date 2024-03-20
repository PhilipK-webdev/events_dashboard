const { MongoClient } = require("mongodb");

async function stateRepository(req) {
  const client = new MongoClient(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const database = client.db(process.env.DB); // Choose a name for your database
    const collection = database.collection(process.env.COLLECTION); // Choose a name for your collection
    const result = await collection
      .find({}, { projection: { _id: 0, registered: 0 } })
      // .limit(50)
      .toArray();
    return result;
  } catch (error) {
    return new Error("Failed to fetch from DB");
  }
}

module.exports = {
  stateRepository,
};
