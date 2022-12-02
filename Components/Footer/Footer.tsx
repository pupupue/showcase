import React from "react"
import Image from 'next/image'
import { SiWhatsapp, SiTiktok } from 'react-icons/si';
import { SlSocialYoutube } from 'react-icons/sl';
import { AiOutlineFacebook } from 'react-icons/ai';
import { FiFigma } from 'react-icons/fi';
import CardCarousel from "../Carousel/CardCarousel";


const Footer = () => {
  return (
    <div className="w-full h-full py-10 md:container md:mx-auto md:overflow-visible px-5 md:px-0">
      <div className="flex flex-row justify-between">
        <div className="hidden sm:w-1/2 sm:flex sm:flex-col sm:gap-3">
          <img src={'/images/logo-web.png'} className='h-18 w-52' />
          <div className="w-4/5 md:w-3/5 text-gray font-poppins font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui similique totam voluptas molestiae consequuntur placeat, veritatis, repellendus magnam quia minima veniam ipsam consequatur iusto debitis libero eveniet reiciendis sequi magni...<span className="text-lightGreen font-bold font-poppins"><a href="https://www.youtube.com/watch?v=pRpeEdMmmQ0">Read More</a></span></div>
          <div className="flex flex-row gap-3">
            <div className="border border-lightGreen rounded-full h-11 w-11 flex justify-center items-center cursor-pointer hover:bg-green-100"><AiOutlineFacebook className="text-lightGreen" /></div>
            <div className="border border-lightGreen rounded-full h-11 w-11 flex justify-center items-center cursor-pointer hover:bg-green-100"><SlSocialYoutube className="text-lightGreen" /></div>
            <div className="border border-lightGreen rounded-full h-11 w-11 flex justify-center items-center cursor-pointer hover:bg-green-100"><FiFigma className="text-lightGreen" /></div>
            <div className="border border-lightGreen rounded-full h-11 w-11 flex justify-center items-center cursor-pointer hover:bg-green-100"><SiTiktok className="text-lightGreen" /></div>
            <div className="border border-lightGreen rounded-full h-11 w-11 flex justify-center items-center cursor-pointer hover:bg-green-100"><SiWhatsapp className="text-lightGreen" /></div>
          </div>
        </div>
        <div className="flex flex-row w-full sm:w-1/2 justify-between">
          <div className="flex flex-col gap-2 md:gap-4 flex-1 text-sm md:text-base text-center">
            <div className="font-bold text-xl text-lightGreen font-poppins">About</div>
            <div className="font-poppins text-gray font-medium">About Us</div>
            <div className="font-poppins text-gray font-medium">Blog</div>
            <div className="font-poppins text-gray font-medium">Careers</div>
            <div className="font-poppins text-gray font-medium">Jobs</div>
            <div className="font-poppins text-gray font-medium">In Press</div>
          </div>
          <div className="flex flex-col gap-2 md:gap-4 flex-1 text-sm md:text-base text-center">
            <div className="font-bold text-xl text-lightGreen font-poppins">Support</div>
            <div className="font-poppins text-gray font-medium">Contact Us</div>
            <div className="font-poppins text-gray font-medium">Online Chat</div>
            <div className="font-poppins text-gray font-medium">Whatsapp</div>
            <div className="font-poppins text-gray font-medium">Telegram</div>
            <div className="font-poppins text-gray font-medium">Ticketing</div>
          </div>
          <div className="flex flex-col gap-2 md:gap-4 flex-1 text-sm md:text-base text-center">
            <div className="font-bold text-xl text-lightGreen font-poppins">FAQ</div>
            <div className="font-poppins text-gray font-medium">Account</div>
            <div className="font-poppins text-gray font-medium">Manage Deliveries</div>
            <div className="font-poppins text-gray font-medium">Orders</div>
            <div className="font-poppins text-gray font-medium">Payments</div>
            <div className="font-poppins text-gray font-medium">Returns</div>
          </div>
        </div>
      </div>


      <div className="w-full justify-center flex-col md:flex-row flex mt-5 md:mt-10 gap-1">
        <div className="font-poppins text-gray font-medium w-full md:w-min whitespace-nowrap text-center">
          2022, All Right Reserved |
        </div>
        <div className="font-poppins font-bold text-lightGreen cursor-pointer w-full md:w-min whitespace-nowrap text-center"> Mission Green</div>
      </div>

    </div>
  )
}

export default Footer
