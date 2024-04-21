"use client"

import Link from "next/link"


import { IoHome } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineManageHistory } from "react-icons/md";


export default function Navbar() {

    return (

        <div className="flex justify-between py-5 px-10 dark:bg-slate-800 w-full">
            <Link href={'/'} className="flex">
                <IoHome className="text-white text-2xl mr-1" />
                <h2 className="text-white text-lg font-bold" >NextCRUD</h2>
            </Link>

            <nav className="flex text-white">

                <Link href={'/'}className="flex mr-5 p-1.5 hover:text-[#0891b2] hover:underline transition ease-out ">
                    <FaShoppingCart className="mr-1.5 text-lg "/>
                    <p>Product</p>
                </Link>
                <Link href={'/manage'}className="flex mr-5 p-1.5 hover:text-[#0891b2] hover:underline transition ease-out ">
                    <MdOutlineManageHistory className="mr-1.5 text-lg "/>
                    <p>Manage</p>
                </Link>
            </nav>

        </div>


    )


}


