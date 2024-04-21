import mongoose , { Schema } from 'mongoose'

const productSchema = new Schema(
    {
        name : String,
        description : String,
        imageURL : String,

    },
    {
        timestamps : true
    }
   
)

const Product = mongoose.models.productSchema || mongoose.model('productSchema',productSchema)

export default Product