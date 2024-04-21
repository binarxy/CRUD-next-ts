"use client"

import { ProductType } from "../../types/productType"

import Image from "next/image"

export default function Card({ name , description , imageURL } : ProductType){
    return ( 
        <div>
            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-11/12 overflow-hidden mb-10">

                <div className="w-full h-30">
                    <Image src={imageURL} alt={imageURL} width={200} height={100} className="rounded-t-lg w-full h-56"/>
                </div>
                <div className="p-5 h-56">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">{description}</p>
                    
                </div>
            </div>

        </div>
    )
}