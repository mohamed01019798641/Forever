import CartTotal from "../components/CartTotal"
import Title from "../components/Title"
import stripe_logo from '../../public/stripe_logo.png'
import razorpay_logo from '../../public/razorpay_logo.png'
import { useContext, useState } from "react"
import { ShopContext } from "../context/ShopContext"
const PlaceOrder = () => {
  const [method,setMethod]=useState('cod');
  const {navigate}=useContext(ShopContext);
  
  return (
    <div className=" flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t ">
       { /* left  */}
       <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
          <div className="text-xl sm:text-2xl my-3">
            <Title text1={'DELIVERY'} text2={'INFOMATION'}/>
          </div>
          <div className="flex gap-3">
            <input type="text" placeholder="Frist name" className="py-1.5 px-3.5 w-full border border-gray-300 rounded"/>
            <input type="text" placeholder="Last name" className="py-1.5 px-3.5 w-full border border-gray-300 rounded"/>
          </div>
          <input type='email' placeholder="Email address " className="py-1.5 px-3.5 w-full border border-gray-300 rounded"/>
          <input type='email' placeholder="Street " className="py-1.5 px-3.5 w-full border border-gray-300 rounded"/>
          <div className="flex gap-3">
            <input type="text" placeholder='City' className="py-1.5 px-3.5 w-full border border-gray-300 rounded"/>
            <input type="text" placeholder="State" className="py-1.5 px-3.5 w-full border border-gray-300 rounded"/>
          </div>
          <div className="flex gap-3">
            <input type='number' placeholder="Zipcode" className="py-1.5 px-3.5 w-full border border-gray-300 rounded"/>
            <input type="text" placeholder="Conutry" className="py-1.5 px-3.5 w-full border border-gray-300 rounded"/>
          </div>
          <input type='number' placeholder="Phone" className="py-1.5 px-3.5 w-full border border-gray-300 rounded"/>
       </div>
       {/* right */}
       <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal/>
        </div>
        <div className="mt-12">
          <Title text1={'PAYMENT'} text2={'METHOD'}/>
          {/* PAYMENT */}
          <div  className=" flex flex-col gap-3 lg:flex-row">
           <div onClick={()=>setMethod('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
             <p className={`min-w-3.5 min-h-3.5  border rounded-full p-3 ${method==='stripe'?'border-green-400':''}`}>
              <img src={stripe_logo} alt="" className="h-5 mx-4" />
             </p>
           </div>
           <div onClick={()=>setMethod('razorpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
             <p className={`min-w-3.5 min-h-3.5  border rounded-full p-3 ${method==='razorpay'?'border-green-400':''}`}>
              <img src={razorpay_logo} alt="" className="h-5 mx-4" />
             </p>
           </div>
           <div onClick={()=>setMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
             <p className={`min-w-3.5 min-h-3.5  border rounded-full p-3 ${method==='cod'?'border-green-400':''}`}>
              <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
             </p>
           </div>
          </div>
          <div className="w-full text-end mt-8">
            <button onClick={()=>navigate('/orders')} className="bg-black text-white px-16 py-3 text-sm">PLACE ORDER</button>

          </div>
        </div>

       </div>
    </div>
  )
}

export default PlaceOrder
