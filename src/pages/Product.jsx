/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ShopContext } from "../context/ShopContext";
import star_icon from '../../public/star_icon (2).png'
import Relatedproduct from "../components/Relatedproduct";

const Product = () => {
  const {productId}=useParams();
  const {products,currency,addTocart,}=useContext(ShopContext);
  const [productData,setproductData]=useState(false);
  const [image,setimage]=useState('');
  const [sizes,setsize]=useState('');

  const FetchproductData= async()=>{
    products.map((item)=>{
      if(item._id===productId){
        setproductData(item);
        setimage(item.image[0])
        
        return null
      }

    })

  }

  useEffect(()=>{
 FetchproductData();
  },[productId])



  return  productData ?(
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 ">
       {/* product Data */}
       <div className=" flex gap-12 sm:gap-12 flex-col sm:flex-row">


       {/* product images */}
       <div className=" flex-1 flex flex-col-reverse gap-3 sm:flex-row">
        <div className=" flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
         {
          productData.image.map((item,i)=>(
            <img onClick={()=>setimage(item)} src={item} alt="" key={i} className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"/>
          ))
         }
        </div>
        <div className="w-full sm:w-[80%]">
          <img src={image} alt="" className="w-full h-auto" />
        </div>
       </div>

       {/*  product Info */}
       <div className=" flex-1">
        <h1 className=" font-medium text-2xl mt-2">{productData.name}</h1>
        <div className=" flex items-center gap-1 mt-2">
          <img src={star_icon} alt=""  className="w-3 "/>
          <img src={star_icon} alt=""  className="w-3 "/>
          <img src={star_icon} alt=""  className="w-3 "/>
          <img src={star_icon} alt=""  className="w-3 "/>
          <img src={star_icon} alt=""  className="w-3 "/>
          <p className="pl-2">(122)</p>
        </div>
        <p className=" mt-5 text-3xl font-medium">{currency}{productData.price}</p>
        <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
        <div className=" flex flex-col gap-4 my-8">
          <p>Select Size</p>
          <div className=" flex gap-2">
            {
              productData.sizes.map((item,i)=>(
                <button  onClick={()=>setsize(item)} className={`border py-2 px-4 bg-gray-100 ${item===sizes?'border-orange-500':''}`} key={i}>{item}</button>

              ))
            }

          </div>
        </div>
        <button onClick={()=>addTocart(productData._id,sizes)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">ADD TO CART</button>
        <hr className="mt-8 sm:w-4/5"/>
        <div className=" text-sm text-gray-500 mt-5 flex flex-col gap-1 ">
          <p>100% Original product.</p>
          <p>Cash on Delivery is available on this product.</p>
          <p>Easy return and exchange policy within 7 days.</p>

        </div>

       </div>
       </div>
       {/* Description & Review Section */}
       <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm ">
           Description
          </b>
          <p className="border px-5 py-3 text-3">Reviews (122)</p>
        </div>
        <div className=" flex flex-col gap-4 px-6 py-6 text-sm text-gray-500">
         <p>An- e-commerce website is an online platform</p>
         <p>E-commerce websiteslay typically disp </p>
        </div>
       </div>
       {/* display related products */}
       <Relatedproduct category={productData.category} />
       
    </div>
  ): <div className=" opacity-0"></div>
}

export default Product
