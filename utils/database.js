import mongoose from "mongoose";

let isConnected = false

export const connectToDB = async () => {
    mongoose.set('strictQuery', True)

    if(isConnected){
        console.log('MongoDB connected');
        return
    }

    try {
        mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'share_prompt',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected = true
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
    }
}