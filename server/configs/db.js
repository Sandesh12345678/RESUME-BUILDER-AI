import mongoose from "mongoose";

const connectDB = async () =>{
    try{
        mongoose.connection.on("connected", ()=>{console.log("Database connected successfully")})

        let mongodbURI = process.env.MONGODB_URI;
        const projectName = 'resume-builder';

        if(!mongodbURI){
            console.warn("MONGODB_URI is not set. Server will start without a database connection.");
            return;
        }

        if(mongodbURI.endsWith('/')){
            mongodbURI = mongodbURI.slice(0,-1)
        }

        await mongoose.connect(`${mongodbURI}/${projectName}`)
    }catch(error){
        console.error("Error connecting to MongoDB: ", error)
    }
}

export default connectDB;