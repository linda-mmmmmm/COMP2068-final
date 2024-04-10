import dotenv from "dotenv";
import mongoose from "mongoose";

// This loads our .env and adds the variables to the environment
dotenv.config();

export default () => {
    /**
     * Setting up Mongoose
     */
    mongoose.connect(
      "mongodb+srv://cld112345689:cld2986707@inclassproject.ryiqryz.mongodb.net/?retryWrites=true&w=majority&appName=inclassproject"
      ).then(() => console.info("MongoDB Connected"))
        .catch(error => console.error(error));
};