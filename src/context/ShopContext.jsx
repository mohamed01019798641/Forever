/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react"
import {products} from '../assets/assets'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();
const ShopcontextProvider=(props)=>{
    const currency='$';
    const delivery_fee=10;
    const [search,setsearch]=useState('');
    const [showSearch,setshowSearch]=useState(false);
    const [cartItem,setcartItem]=useState({});
    const navigate =useNavigate();
    


    const addTocart=async (itemId,size)=>{
        if(!size){
            toast.error('Select Product Size');
            return;
        }
        let cartdata=structuredClone(cartItem);
        if(cartdata[itemId]){
            if(cartdata[itemId][size]){
                cartdata[itemId][size]+=1;
            }
            else{
                
                 cartdata[itemId][size]=1;  
            }
            
        }
        else{
            cartdata[itemId]={};
            cartdata[itemId][size]=1;
    
            
        }
        setcartItem(cartdata)
        

    }
    
         
    const getCartCount=()=>{
        let Totalcount=0;
        for(const items in cartItem){
            for(const item in cartItem[items]){
                try {
                 if(cartItem[items][item]>0){
                    Totalcount+=cartItem[items][item];
                 }
                }catch(error){}
            }
        }
        return Totalcount;
    }

    

    const updateQuantity =async(itemid,size,quantity)=>{
        let cartdata =structuredClone(cartItem);
        cartdata[itemid][size]=quantity;
        setcartItem(cartdata);

    };



    const getCartAmount=()=>{
        let totalAmount=0;
        for(const items in cartItem){
            let itemInfo=products.find((p)=>p._id===items);
            for(const item in cartItem[items]){
                try{
                    if(cartItem[items][item]>0){
                        totalAmount += itemInfo.price * cartItem[items][item]

                    }
                }catch (error){}
            }
        }
        return totalAmount;
    }




   
    const value={
        products, currency,  delivery_fee,
        search ,setsearch,showSearch,setshowSearch,
        cartItem,addTocart,
        getCartCount,
        updateQuantity,
        getCartAmount,navigate
        
    }



    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopcontextProvider;



