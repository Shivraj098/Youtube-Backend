


import connectDB from "./db/index.js";



connectDB();






/*
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("error,error");
      throw error;
    });

  } catch (error) {
    console.error("Error", error);
    throw err;
  }
})();
*/
