import mongoose from "mongoose";


const connection = async (username,password) =>  {

    const URL = `mongodb://${username}:${password}@ac-jgdzb1w-shard-00-00.oqsiq6h.mongodb.net:27017,ac-jgdzb1w-shard-00-01.oqsiq6h.mongodb.net:27017,ac-jgdzb1w-shard-00-02.oqsiq6h.mongodb.net:27017/FLIPKART-CLONE?ssl=true&replicaSet=atlas-uwjblw-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try{
        await mongoose.connect(URL,{ useUnifiedTopology: true, useNewUrlParser: true });
        console.log(`DB is connected successfully`);
    }catch(err){
        console.log(`error while connecting db ${err.message}`);
    } 
}

export default connection;