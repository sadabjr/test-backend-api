const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const conn = await mongoose
      .connect(process.env.MONGO_URI, {
        dbName: "BLOG_API",
      })
      .then(() => console.log("Database Connected"))
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDb;
