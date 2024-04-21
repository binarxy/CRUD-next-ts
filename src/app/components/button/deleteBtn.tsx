"use client"

import { ProductInfo } from "@/app/types/productType"
import Swal from 'sweetalert2'

// import { useRouter } from 'next/navigation'

export default function deleteBtn({ id } : ProductInfo){


    const handleDelete = async ()=> {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then( async (result) => {
                if (result.isConfirmed) {

                    try {
                        const res = await fetch(`http://localhost:3000/api/delete?id=${id}`,{
                            method : 'DELETE'
                        })

                        if(res.ok) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your product has been deleted.",
                                icon: "success"
                            });
                            return window.location.reload() 
                        }

                        return Swal.fire({
                            icon: "error",
                            title: "Errror",
                            text: "can't delete product, please try again.!",
                        })

                    } catch (e) {
                        console.log(e);
                        return Swal.fire({
                            icon: "error",
                            title: "Errror",
                            text: "can't delete product, please try again.!",
                        })
                    }

                    
                }
        });
    }

    return (
        <a onClick={handleDelete} className="bg-red-500 rounded px-5 py-2 text-white hover:bg-red-900 transition ease-out cursor-pointer">
            Delete
        </a>
    )
}