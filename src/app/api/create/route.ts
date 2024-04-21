import { NextRequest, NextResponse } from "next/server";

import { ConnectDB } from "../../../../lib/database";
import Product from "../../../../lib/model/Schema";

export async function POST(req : NextRequest){
    try {

        const { name , description , productImg : imageURL} = await req.json()

        await ConnectDB();
        
        await Product.create({
            name,
            description,
            imageURL
        })

        return NextResponse.json({msg : 'create product suscessfully.'},{status:201})

    } catch (e) {
        console.log(e);
        return NextResponse.json({msg : 'fail to create product.'},{status: 500})
    }
}

