import Title from "../components/Title"
import about_img from '../../public/about_img.png'
import NewsletterBox from "../components/NewsletterBox"

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABUT'} text2={'US'}/>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={about_img} alt="" />
        <div className=" flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Forever Was born out of a passion for innovation</p>
          <p>Since our inception, we&#39;ve worked tirelessly to curate </p>
          <b className="text-gray-800">Our Mission</b>
          <p>Our mission at Forever is to empower customers with choice</p>
        </div>
      </div>
      <div className="text-xl py-4 ">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className=" flex flex-col md:flex-row text-sm mb-20 ">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">We meticulously aelect and vet each product to ensure</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">With our user-friendly interface and hassle-free</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">Our team dedicated professionals is here</p>
        </div>
      </div>
      <NewsletterBox/>
      
    </div>
  )
}

export default About
