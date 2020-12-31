// CRUD create read update delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const objectId = mongodb.objectId;

const { MongoClient, objectId, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectID();
console.log(id);
console.log(id.id);
console.log(id.id.length);
console.log(id.getTimestamp());
console.log(id.toHexString().length);

MongoClient.connect(
  connectionURL,
  { useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("unable to connet to data base");
    }
    console.log("conection established");
    const db = client.db(databaseName);

    // db.collection("users").insertOne(
    //   {
    //     name: "balaji",
    //     age: 29,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       console.log("unable to insert user");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "dhruv",
    //       age: 1,
    //     },
    //     {
    //       name: "deepika",
    //       age: 24,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       console.log("unable to insert to user");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "learing node js",
    //       condition: true,
    //     },
    //     {
    //       description: "undestanding javascript",
    //       condition: true,
    //     },
    //     {
    //       description: "learning full stack development",
    //       condition: true,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       console.log("unabe to insert user");
    //     }
    //     console.log(result.ops);
    //   }
    // );
  }
);
