import { Link, NavLink } from 'react-router-dom'
import logo from '../../public/logo.png'
import search_icon from '../../public/search_icon.png'
import profil_icon from '../../public/profile_icon.png'
import cart_item from '../../public/cart_icon.png'
import menu_icon from '../../public/menu_icon.png'
import { useContext, useState } from 'react';
import dropdown_icon from '../../public/dropdown_icon.png';
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
    const [visible,setVisible]=useState(false);
    const {setshowSearch,getCartCount}=useContext(ShopContext);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to='/'> <img src={logo} alt="" className='w-36' /></Link>
     <ul className=' hidden sm:flex gap-5 text-sm text-gray-700'> 
        <NavLink to={'/'} className=' flex flex-col items-center gap-1'>
            <p>HOME</p>
            <hr  className=' w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to={'/coolection'} className=' flex flex-col items-center gap-1'>
            <p>COLLECTION</p>
            <hr  className=' w-2/4 border-none h-[1.5px] bg-gray-700 hidden '/>
        </NavLink>
        <NavLink to={'/about'} className=' flex flex-col items-center gap-1'>
            <p>ABOUT</p>
            <hr  className=' w-2/4 border-none h-[1.5px] bg-gray-700  hidden'/>
        </NavLink>
        <NavLink to={'/contact'} className=' flex flex-col items-center gap-1'>
            <p>CONTACT</p>
            <hr  className=' w-2/4 border-none h-[1.5px] bg-gray-700  hidden'/>
        </NavLink>
     </ul>
     <div className=' flex items-center gap-6'>
        <img onClick={()=> setshowSearch(true)} src={search_icon} alt="" className='w-5 cursor-pointer ' />
        <div className=' group relative'>
           <Link to='/login'> <img src={profil_icon} alt="" className='w-5 cursor-pointer'/></Link>
            <div className=' group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
               <div className=' flex flex-col gap-2 w-36 py-3 bg-slate-100 text-gray-500 rounded'>
                <p className=' cursor-pointer hover:text-black'>My Profile</p>
                <p className=' cursor-pointer hover:text-black'>Order</p>
                <p className=' cursor-pointer hover:text-black'>Logout</p>
               </div>
            </div>
        </div>
        <Link to='/cart' className=' relative'>
        <img src={cart_item} alt="" className='w-5 min-w-5 '/>
        <p className=' absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] '>{getCartCount()} </p>
        
        </Link>
        <img onClick={()=>setVisible(true)} src={menu_icon} alt=""  className='w-5 cursor-pointer sm:hidden '/>
     </div>
     {/* sidebar menu for small screens */}
     <div className={`absolute top-0 bottom-0 overflow-hidden bg-white transition-all ${visible? 'w-full':'w-0'}`}>
      <div className=' flex flex-col text-gray-600 '>
        <div onClick={()=>setVisible(false)} className='flex cursor-pointer items-center gap-4 p-3'>
            <img src={dropdown_icon} alt="" className='h-4  rotate-180'/>
            <p>Back</p>
        </div>
        <NavLink onClick={()=>setVisible(false)}  className='py-2 pl-6 border'to='/'>HOME</NavLink>
        <NavLink onClick={()=>setVisible(false)}  className='py-2 pl-6 border'to='/coolection'>COOLECTION</NavLink>
        <NavLink onClick={()=>setVisible(false)}  className='py-2 pl-6 border'to='/about'>ABUT</NavLink>
        <NavLink onClick={()=>setVisible(false)}  className='py-2 pl-6 border'to='/contact'>CONTACT</NavLink>
      </div>
     </div>
     
    </div>
  )
}

export default Navbar
