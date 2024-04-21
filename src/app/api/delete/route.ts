import { ConnectDB } from "../../../../lib/database";
import Product from "../../../../lib/model/Schema";
import { NextRequest, NextResponse } from "next/server";

// import { useSearchParams } from 'next/navigation'

export async function DELETE(req : NextRequest){
    try {

        
        const id = await req.nextUrl.searchParams.get('id')
                
        await ConnectDB()
        await Product.findByIdAndDelete(id)
    
        return NextResponse.json({msg : 'delete product success!'},{status:200})
        


    } catch (e) {
        console.log(e);
        return NextResponse.json({msg : 'fail to delete product.'},{status:500})
    }
}