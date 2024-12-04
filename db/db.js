import mongoose from "mongoose";

const connectToMongoDB = async () => {
     try {
        await mongoose.connect('mongodb+srv://rathika:rathika%402005@cluster0.dgo9b.mongodb.net/');
        console.log("Connect to MongoDB")
        
     } catch (error) {
        console.log("Error connecting to MongoDB", error.message);
        
     }
};
export default connectToMongoDB;