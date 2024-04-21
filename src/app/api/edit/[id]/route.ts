
import { ProductInfo, ProductType } from "@/app/types/productType";
import { ConnectDB } from "../../../../../lib/database";
import Product from "../../../../../lib/model/Schema";

import { NextRequest , NextResponse} from "next/server";

export async function PUT(req : NextRequest, { params } : any){
    try {
    
    const { id } : ProductInfo = params

    const { name , description , productImg : imageURL} = await req.json()

    const newFields : Partial<ProductType> = {}
        
    if (name) { newFields.name = name }

    if (description) { newFields.description = description }

    if (imageURL) { newFields.imageURL = imageURL }   

    
    await ConnectDB();

    
    

    await Product.findByIdAndUpdate(id,newFields)

    return NextResponse.json({msg : 'Update product success!'},{ status : 201})

    } catch (e) {
        console.log(e);
        return NextResponse.json({msg : 'fail to update this product.'}, { status : 500})
    }
}     
