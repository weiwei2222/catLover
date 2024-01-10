import mongoose from "mongoose";

function MongoDB() {
  mongoose.connect(process.env.DATABASE_URL);

  const db = mongoose.connection;

  db.on("connected", function () {
    console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
  });
}

export default MongoDB;
