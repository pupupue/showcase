import React from "react"
import Image from 'next/image'
import { BsPersonPlus } from 'react-icons/bs';
import { RiContactsBook2Line } from 'react-icons/ri';
import CardCarousel from "../Carousel/CardCarousel";



const FirstSection = () => {
  return (
    <div className="w-full h-full md:container md:mx-auto md:overflow-visible px-5 md:px-0">
      <div className='flex flex-row mt-14 h-full w-full'>
        <div className="grid md:grid-rows-5 xl:grid-cols-2 grid-flow-col gap-1 w-full h-full ">
          <div className="row-span-3 xl:row-span-3 2xl:row-span-3 w-full h-full">
            <div className="text-5xl md:text-7xl lg:text-8xl leading-none lg:leading-tight xl:leading-snug 2xl:leading-snug font-poppins font-medium">Happiness is growing <span className="text-darkGreen font-poppins font-bold">Weed!</span>
            </div>
            <div className="text-gray text-lg md:text-2xl font-poppins w-full leading-relaxed md:leading-relaxed mt-3 lg:mt-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos veritatis illo, praesentium voluptatibus nihil, tenetur itaque vero nulla qui exercitationem aut temporibus eum. Quibusdam, dolorum at nostrum laudantium necessitatibus numquam id repellendus alias aliquid fugit.
            </div>
            <div className="cursor-pointer mt-8 h-14 w-48 bg-gradient-to-tr bg-lightGreen from-darkGreen to-lightGreen hover:bg-transparent hover:border-2 hover:text-lightGreen border-lightGreen hover:from-transparent hover:to-transparent rounded-xl flex justify-center items-center font-poppins font-bold text-white">
              Shop now
            </div>

          </div>
          <div className="row-span-2 xl:row-span-2 2xl:row-span-2 xl:col-span-2 xl:mt-28 2xl:mt-0 2xl:col-span-1 w-full h-full items-end flex">
            <CardCarousel />
          </div>


          <div className=" xl:row-span-3 2xl:row-span-5 xl:col-span-1 hidden 2xl:block xl:flex xl:justify-start">
            <div style={{ width: '100%', height: '100%', position: 'relative', }}>
              <Image
                alt='Mountains'
                src='/images/plant-2.png'
                layout='fill'
                objectFit='contain'
              />
            </div>
          </div>

        </div>

      </div>


    </div>
  )
}

export default FirstSection
