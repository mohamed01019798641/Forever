
import { useContext, useEffect, useState} from "react"
import { ShopContext } from "../context/ShopContext"
import search_icon from '../../public/search_icon.png'
import cross_icon from '../../public/cross_icon.png'
import { useLocation } from "react-router-dom"
const Searchbar = () => {
    const { search ,setsearch,showSearch,setshowSearch}=useContext(ShopContext);
    const [visble,setvisbale]=useState(false)
    const location=useLocation();
    
    useEffect(()=>{
       if(location.pathname.includes('coolection')){
          setvisbale(true);
       }else{
        setvisbale(false);
       }

    },[location])
  return  showSearch && visble?(
    <div className="border-t border-b bg-gray-50 text-center">
        <div className=" inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full  w-3/4 sm:w-1/2">
           <input value={search} onChange={(e)=>setsearch(e.target.value)} type="text" placeholder="Search" className="flex-1 outline-none bg-inherit text-sm"/>
            <img src={search_icon} alt="" className="w-4" />
        </div>
        <img onClick={()=>setshowSearch(false)} src={cross_icon} alt="" className=" inline w-3 cursor-pointer" />
      
    </div>
  ):null
}

export default Searchbar
