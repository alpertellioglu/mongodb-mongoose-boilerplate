//this page can be used when you don't want to use mongoose but mongodb driver instead

// const MongoClient = require("mongodb").MongoClient;

// const url =
//   "you-should-write-here-mongodb-uri";

// const createProduct = async (req, res, next) => {
//   const newProduct = {
//     name: req.body.name,
//     price: req.body.price,
//   };
//   const client = new MongoClient(url);

//   try {
//     await client.connect();
//     const db = client.db();
//     const result = db.collection("products").insertOne(newProduct);
//   } catch (error) {
//     return res.json({ message: "could not store data" });
//   }
//   client.close();

//   res.json(newProduct);
// };

// const getProducts = async (req, res, next) => {
//   const client = new MongoClient(url);

//   let products;

//   try {
//     await client.connect();
//     const db = client.db();
//     products = await db.collection("products").find().toArray();
//   } catch (error) {
//     return res.json({ message: "could not retrieve products." });
//   }
//   client.close();

//   res.json(products);
// };

// exports.createProduct = createProduct;
// exports.getProducts = getProducts;
