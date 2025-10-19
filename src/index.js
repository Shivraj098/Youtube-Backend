import connectDB from "./db/index.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
    server.on("error", (error) => {
      console.log("Server connection failed", error);
      process.exit(1);
    });
  })

  .catch((err) => {
    console.log("Mongodb connection failed", err);
  });

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
