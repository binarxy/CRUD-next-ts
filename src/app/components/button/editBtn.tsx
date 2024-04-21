"use client"

import { ProductInfo } from '@/app/types/productType'

import Link from 'next/link'

export default function editBtn({ name, id } : ProductInfo){
    return (
        <Link href={`/edit/${id}?productName=${name}`} className="bg-[#2563eb] rounded px-5 py-2 text-white hover:bg-[#1e40af] transition ease-out cursor-pointer mr-3.5">Edit</Link>
    )
}
