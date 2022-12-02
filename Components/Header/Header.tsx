import React, { useState } from "react"
import Image from 'next/image'
import { BsPersonPlus } from 'react-icons/bs';
import { RiContactsBook2Line } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';


const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="w-full sticky top-0 z-20">
      <div className={` ${open ? 'block' : 'hidden'} z-50 fixed top-[63px] md:top-[90px] w-full bg-white`}>
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
          <li>
            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Search</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Plants</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Pots</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Contact</a>
          </li>
        </ul>
      </div>
      <div className='justify-between border-b border-slate-300 items-center py-2 md:pt-5 md:pb-5 bg-light w-full px-3 md:px-0 h-[63px] md:h-[90px]'>
        <div className="flex flex-row w-full md:container md:mx-auto md:overflow-visible">
          <div className="flex lg:w-full flex-row gap-2 md:gap-10 lg:gap-22 xl:gap-32 items-center">
            <div className="h-full w-40">
              <Image src="/images/logo-web.png" alt="logo" width="150" height="150" />

            </div>
            <div className="hidden lg:flex flex-row gap-1 md:gap-3 lg:gap-6 xl:gap-9 font-poppins font-medium text-lg">
              <div className="hover:underline  underline-offset-4 decoration-2 decoration-lightGreen cursor-pointer">
                Home
              </div>
              <div className="hover:underline underline-offset-4 decoration-2 decoration-lightGreen cursor-pointer">
                Plants
              </div>
              <div className="hover:underline underline-offset-4 decoration-2 decoration-lightGreen cursor-pointer">
                Pots
              </div>
              <div className="hover:underline underline-offset-4 decoration-2 decoration-lightGreen cursor-pointer">
                Contact
              </div>

            </div>



          </div>


          <div className="flex-row flex gap-5 w-full justify-end relative">
            <div className="lg:hidden h-full flex items-center md:absolute md:left-10" onClick={() => setOpen((prev) => (!prev))}><GiHamburgerMenu className="h-8 w-8 text-brown" /></div>

            <form className="hidden md:block ">
              <div className="relative border-b-2 border-brown">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Image src="/images/search-icon.png" alt="logo" width="25" height="25" />
                </div>
                <input type="search" id="default-search" className="w-full p-2 pl-10 text-sm focus:outline-none bg-transparent" placeholder="Search Plants" required />
              </div>
            </form>

            <div className="h-full flex flex-row gap-2 items-center">
              <div className="border-2 rounded-xl border-brown w-24 h-10 md:w-28 md:h-12 flex justify-center items-center flex-row text-base cursor-pointer">
                <RiContactsBook2Line />
                <div className="border-l h-4 mx-1 border-brown font-poppins"></div>Contact
              </div>
              <div className="rounded-xl w-10 h-10 md:w-12 md:h-12 flex justify-center items-center bg-brown cursor-pointer">
                <BsPersonPlus className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
