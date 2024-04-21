import { ConnectDB } from "../../../../lib/database";
import { NextRequest, NextResponse } from "next/server";
import Product from "../../../../lib/model/Schema";

export async function GET(req : NextRequest){
    try {
        await ConnectDB()
        
        const Products = await Product.find({})
        return NextResponse.json({Products})
    } catch (e) {
        console.log(e);
        return NextResponse.json({msg : "can't get product from db"},{ status:500})
        
    } 
}