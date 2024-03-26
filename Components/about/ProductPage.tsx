'use client'
import {useEffect, useState} from "react";
import Component from "@/Components/about/Component";

export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}
const ProductPage = () => {
    const [datas, setDatas] = useState<Product[]>([]) // Initialize with empty array
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setDatas(data))
    },[])
    return (
        <>
            <h1>Api</h1>
            <Component datas={datas} />
        </>
    )
}
export default ProductPage;6