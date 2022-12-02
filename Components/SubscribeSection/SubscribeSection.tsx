import React from "react"
import Image from 'next/image'
import { HiOutlineChatAlt2, HiOutlineUserGroup } from 'react-icons/hi';
import { TbPlant, TbPlant2 } from 'react-icons/tb';
import CardCarousel from "../Carousel/CardCarousel";
import styles from '../../styles/Home.module.css'


const SubscribeSection = () => {
  return (
    <div className='flex w-full justify-center md:container md:mx-auto md:overflow-visible px-5 md:px-0'>
      <div className="flex flex-row w-full md:w-5/6">
        <div className="hidden md:block w-2/5">
          <img src="/images/plant-bg.jpg" className="rounded-l-3xl" />
        </div>
        <div className="flex flex-col w-full md:w-3/5 bg-white rounded-l-3xl md:rounded-l-none rounded-r-3xl justify-center items-center">
          <div className="w-11/12 xl:w-2/3 flex flex-col md:gap-1 py-2 md:py-0 lg:gap-2 2xl:gap-3">
            <div className="font-poppins text-xs md:text-sm 2xl:text-xl font-medium text-gray">Subscribe to our newsletter</div>
            <div className="font-poppins text-xl xl:text-4xl 2xl:text-5xl text-lightGreen font-semibold">Let us be your plug.</div>
            <div className="text-xs xl:text-base font-poppins">Get out latest articles and business updates that you need to know, you'll even get special recommendations weekly.</div>
            <div className="w-full h-full">
              <form action="#" className="">
                <div className="items-center mx-auto sm:flex sm:space-y-0 mt-1 w-full">
                  <div className="relative w-full border border-slate-400 rounded-l-lg rounded-r-lg sm:rounded-r-none h-7 md:h-9 2xl:h-12">
                    <input className="h-full outline-none rounded-l-lg px-5" type='email' id='email' placeholder="Enter your email" />
                  </div>
                  <div className="flex justify-center mt-1 md:mt-0">
                    <button type="submit" className="w-24 h-7 md:h-9 2xl:h-12 text-sm font-medium text-center bg-lightGreen text-white rounded-lg cursor-pointer bg-lighGreen sm:rounded-none sm:rounded-r-lg hover:bg-darkGreen ">Subscribe</button>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SubscribeSection
