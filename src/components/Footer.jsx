import logo from '../../public/logo.png'

const Footer = () => {
  return (
    <div >
        <div className=" flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] my-10 gap-14 mt-40 text-sm">
          <div>
            <img className='mt-5 w-32' src={logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, expedita?
            </p>
          </div>
          <div>
            <p className=' text-xl font-medium mb-5 '>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>Abut Us</li>
                <li> Delivery</li>
                <li>Privacy Policy</li>


            </ul>
          </div>
          <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-212-456-7650</li>
                <li>contace@foreveryou.com</li>

            </ul>
          </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ forever.com - All right Reserved.</p>
        </div>
      
    </div>
  )
}

export default Footer
