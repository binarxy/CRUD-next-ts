import mongoose from 'mongoose'

import dotenv from 'dotenv'

dotenv.config()



export async function ConnectDB(){
    try {
        
        
        await mongoose.connect(process.env.MONGODB_URL!)
        .then(()=>{
            // console.log("Connect to MongoDB!");
            
        })

    } catch (e) {
        console.log(e);
        
    }
}