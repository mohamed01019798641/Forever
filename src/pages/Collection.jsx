/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import dropdown_icon from '../../public/dropdown_icon.png'
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const {products,search,showSearch}=useContext(ShopContext);
  const [showfilter,setshowfilter]=useState(false);
  const [filterproducts,setfilterproducts]=useState([]);
  const [category,setcategory]=useState([]);
  const [sorttype,setsorttype]=useState('relavent')


  const toggalecategory=(e)=>{
    if(category.includes(e.target.value)){
      setcategory(r=>r.filter(item =>item !== e.target.value))
    }else{
      setcategory(p=> [...p,e.target.value])
    }
  }



  const applyFilter =()=>{
    let prductscopy=products.slice();
    if(showSearch && search){
      prductscopy=prductscopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if(category.length >0){
      prductscopy=prductscopy.filter(item=>category.includes(item.category));
    }

   
    setfilterproducts(prductscopy)
  };


   const sortproduct=()=>{
    let fpcopy=filterproducts.slice();
    switch (sorttype){
      case 'low-high':
        setfilterproducts(fpcopy.sort((a,b)=>(a.price - b.price)))
        break;
        case 'high-low':
          setfilterproducts(fpcopy.sort((a,b)=>(b.price - a.price)))
        break;
        default : 
        applyFilter();
        break;
    }
   }

  useEffect(()=>{
    applyFilter();

  },[category,search,showSearch])

  useEffect(()=>{
    sortproduct()
  },[sorttype])
  

  return (
    <div className=" flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* filter option */}
      <div className="min-w-60">
        <p onClick={()=>setshowfilter(!showfilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">FILTERS
         <img  className={`h-3 sm:hidden ${showfilter?'rotate-90':''}`} src={dropdown_icon} alt="" />
        </p>
        
        {/* category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showfilter?'':'hidden'} sm:block`}>
          <p className=" mb-3 text-sm font-medium">CATEGORIES</p>
          <div className=" flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className=" flex gap-2">
              <input type='checkbox' className="w-3" value={'Men'}  onChange={toggalecategory}/>Men
            </p>
            <p className=" flex gap-2">
              <input type='checkbox' className="w-3" value={'Women'} onChange={toggalecategory} />Women
            </p>
            <p className=" flex gap-2">
              <input type='checkbox' className="w-3" value={'Kids'}  onChange={toggalecategory}/>Kids
            </p>

          </div>
        </div>
        

      </div>
      {/* right side */}
      <div className="flex-1">
        <div className=" flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'ALL'} text2={'COLLECTTONS'}/>
          {/* product sort */}
          <select onChange={(e)=>setsorttype(e.target.value)} className=" border-2 border-gray-300 text-sm px-2">
            <option  value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low-high </option>
            <option value="high-low">Sort by: high-low </option>
          </select>
        </div>
        {/* map products */}
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {
            filterproducts.map((item,i)=>(
              <ProductItem key={i} name={item.name} id={item._id} price={item.price} image={item.image}/>
            ))
          }

        </div>

      </div>
      
    </div>
  )
}

export default Collection
 