import Title from "../components/Title"
import contact_img from '../../public/contact_img.png'
import NewsletterBox from "../components/NewsletterBox"

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src={contact_img} alt="" className="w-full md:max-w-[480px]" />
        <div className="flex flex-col   items-start gap-6 justify-center">
         <p className="font-semibold text-xl text-gray-600 ">Our Story</p>
         <p className="text-gray-500">54709 Willms Station <br />Suite 350, Washington, USA</p>
         <p className="text-gray-500">Tel: (415) 555-0132 <br />Email:admin@forever.com</p>
         <p className="font-semibold text-xl text-gray-600">Careers at forever</p>
         <p className="text-gray-500">Learn more about our teams and job openings</p>
         <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explore Jobs</button>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact
