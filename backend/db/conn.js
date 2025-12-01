const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      "mongodb+srv://santandernycz:iZ2ydql2sRYITQ9v@cluster0.rvhc5n1.mongodb.net/?appName=Cluster0"
    );
    console.log("Database connected");
  } catch (error) {
    console.log(`Error ${error}`);
  }
}

module.exports = main;
