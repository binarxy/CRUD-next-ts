"use client"

import React , { useState , useEffect } from 'react'

import Navbar from "../components/Navbar"

// import { IoMdCreate } from "react-icons/io";
// import { IoMdSettings } from "react-icons/io";
import { MdOutlineManageHistory } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

import CardEdit from '../components/Card/CardEdit';

import Link from "next/link";



export default function Page(){

  const [products,setProducts] = useState<any[]>([])

  const getProduct = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/product',{
        'cache' : 'no-store'
      }) 
      
      
      const product_fetch = await res.json()
      console.log(product_fetch.Products);
      
      if(res.ok){
        setProducts(product_fetch.Products)
        // console.log(product);
        
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(()=>{
    getProduct()
    console.log(products);
    
  },[])

    return (
    <main>
      <Navbar/>
      <div className="flex min-h-screen flex-col items-center justify-between px-24 py-10">
         <div className=" w-10/12">
            <h1 className="text-white text-3xl flex text-center"><MdOutlineManageHistory className="mr-2.5"/>Manage Products</h1>

            <div>
              <Link href={'/create'} className="text-white text-md p-1 mb-1 mt-5 bg-[#22c55e] flex rounded hover:bg-[#15803d] transition ease-out w-24 "><IoMdAdd className="text-2xl mr-0.5"/>Create</Link>
              <br />
              <hr />
              <br />
            </div>
            {products && products.length > 0 ? (
              <div className='w-full grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>

                {products.map((product)=>(
                  
                  <CardEdit key={product._id} name={product.name} description={product.description} imageURL={product.imageURL} id={product._id}/>
                ))}

              </div>
            ) : (
              <p className='text-center text-white w-full'>Not have any product yet.</p>
            ) }


        </div> 
        
      </div>
    </main>
    )
}