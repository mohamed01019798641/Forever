/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "./Title";
import ProductItem from "./ProductItem";


const LatestCollection = () => {
    const {products}=useContext(ShopContext);
    const [latestProducts,setlatestProducts]=useState([]);
    useEffect(()=>{
        setlatestProducts(products.slice(0,10));

    },[])
   
  return (
    <div className="my-10">
        <div className="text-center py-8 text-3xl">
            <Title text1={'LATEST'} text2={'COLLECTION'}/>
            <p className="w-3/4 m-auto text-xs ms:text:sm md:text-base text-gray-600">
              ipsum dolor sit, amet consectetur adipisicing elit. Adipisci maiores maxime magni pariatur perferendis laudantium itaque quia. Quae, suscipit iure.
            </p>
        </div>
        {/* Rendering Products */}
        <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 ">
          {
            latestProducts.map((item,i)=>(
                <ProductItem key={i} id={item._id} image={item.image} name={item.name} price={item.price}/>

            ))
          }
        </div>
      
    </div>
  )
}

export default LatestCollection
