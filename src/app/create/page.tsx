"use client"

import React , { useState } from 'react'


import Navbar from "../components/Navbar"

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { IoMdCreate } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
// import { FaSave } from "react-icons/fa";
import { UploadDropzone } from "../../utils/uploadthing";

// import { IoIosAddCircleOutline } from "react-icons/io";


import Image from 'next/image';

import Swal from 'sweetalert2'

export default function Page(){

      const [name,setName] = useState("")
      const [description,setDescription] = useState("")
      const [productImg,setProductImg] = useState("")

      const router = useRouter()
      // console.log(name);
      // console.log(description);
      
      const handleSubmit : React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()

        if(!name || !description || !productImg) {
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Incomplete information for product, please try again!",
          })
          return 
        }

        try {
            const res = await fetch('http://localhost:3000/api/create',{
              method : "POST",
              headers : {
                "Content-Type" : "application/json"
              },
              body : JSON.stringify({
                name,
                description,
                productImg
              })

            })

            if(!res.ok){
              Swal.fire({
                icon: "error",
                title: "Something went wrong.",
                text: "Can't Create Product",
              })
              return 
            } 

            Swal.fire({
                title: "Complete!",
                text: "Successfully to create product",
                icon: "success"
            });

            router.push('/')
        } catch (e) {
          console.log(e);

          
        }
      }
      return (
      <main>
        <Navbar/>
        <div className="flex min-h-screen flex-col items-center justify-between px-24 py-10">
          <div className=" w-10/12">
            
              <Link href={'/manage'} className="text-white text-md py-1 px-2 mb-3 mt-5 bg-[#334155] flex w-28 rounded hover:bg-[#1e293b] transition ease-out "><IoMdArrowRoundBack className="text-2xl mr-0.5"/>Go back</Link>
              <h1 className="text-white text-3xl flex"><IoMdCreate className="mr-2.5"/>Create Product</h1>
              <br />
              <hr />
              <br />

              <div className="w-full flex">
                    <div className="w-6/12 h-full">
                          <form action="" onSubmit={handleSubmit}>
                            <div className="flex flex-col mb-3.5">
                              <label htmlFor="product-name" className="text-white text-lg my-2">Product Name</label>
                              <input onChange={(e)=>setName(e.target.value)} type="text" className="w-8/12 rounded px-1.5 py-2 bg-gray-800 text-[#d1d5db] " />
                            </div>
                            <div className="flex flex-col">
                              <label htmlFor="product-name" className="text-white text-lg my-2">Description</label>
                              <textarea onChange={(e)=>setDescription(e.target.value)} className="w-8/12 rounded px-1.5 py-2 h-20 bg-gray-800 text-[#d1d5db]" />
                            </div>
                            
                            <button type="submit" className="text-white flex mt-5 bg-[#22c55e] py-1 px-3 rounded text-lg hover:bg-[#15803d] transition ease-out">
                              {/* <IoIosAddCircleOutline className="text- mr-1 mt-1.5"/> */}
                              <p>Create</p>
                            </button>
                          </form>
                    </div>

                    <div className="w-6/12">
                          <div className='w-full h-3/12'>
                            <UploadDropzone className="bg-slate-800 ut-label:text-lg ut-allowed-content:ut-uploading:text-red-300 w-full"
                              endpoint={'imageUploader'}
                              onClientUploadComplete={(res)=>{
                                // console.log(res[0].url);
                                setProductImg(res[0]?.url)
                              }}
                              onUploadError={(e : Error)=>{
                                console.log(`fail to upload : ${e}`);
                                
                              }}  
                            />
                            {productImg && (
                              <div className='rounded w-full h-96 bg-gray-800 mt-3.5 flex justify-center p-2.5'>
                                  <div className='rounded w-full h-full bg-gray-900'>
                                      <Image src={productImg} alt={productImg} width={533} height={364} className='w-full h-full'></Image>
                                  </div>
                              </div>
                            )} 
                          </div>
                    </div>
              </div>

          </div> 
          
        </div>
      </main>
      )
  }