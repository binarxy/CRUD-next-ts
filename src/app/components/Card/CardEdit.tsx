"use client"

import { ProductType } from "../../types/productType"

import EditBtn from "../button/editBtn"
import DeleteBtn from "../button/deleteBtn"


import Image from "next/image"

import Link from 'next/link'

export default function CardEdit({ name , description , imageURL , id} : ProductType){

    const productId = id!

    return ( 
        <div>
            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-10/12 overflow-hidden mb-10">

                <div className="w-full h-36">
                    <Image src={imageURL} alt={imageURL} width={200} height={100} className="rounded-t-lg w-full h-full"/>
                </div>
                <div className="p-5 h-40 overflow-hidden">
                    <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400  text-sm">{description}</p> 
                </div>
                <div className="mb-4 px-3 mt-2.5">
                    <EditBtn name={name} id={productId}></EditBtn>
                    <DeleteBtn name={name} id={productId}/>
                </div>
            </div>

        </div>
    )
}