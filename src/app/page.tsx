"use client"

import React, { useState , useEffect } from 'react'

import Navbar from "./components/Navbar";

import Card from './components/Card/Card';

export default function Home() {

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
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(()=>{
    getProduct()    
  },[])


  return (
    <main>
      <Navbar/>
      <div className="flex min-h-screen flex-col items-center px-24 py-10">
        <h1 className="text-white text-3xl mb-5">Products</h1>
        {/* <div className='w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '> */}
            {products && products.length > 0 ? (
              <div className='w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>

                {products.map(product => (
                  
                  <Card 
                    key={product._id}
                    name={product.name}
                    description={product.description}
                    imageURL={product.imageURL}
                  />
                
                ))}

              </div>
            ) : (
              <p className='text-center text-white w-full'>Not have any product yet.</p>
            ) }
        {/* </div> */}
      </div>
    </main>
    
  );
}
