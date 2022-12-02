import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'
import styles from '../../styles/Home.module.css'


const CardCarousel = () => {
  return (
    <div className='w-full hidden md:block'>
      <Carousel emulateTouch={true} showArrows={false} showThumbs={false} showStatus={false} infiniteLoop={true} className=''
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <li
                style={{
                  // background: '#09821D',
                  width: 15,
                  height: 15,
                  borderRadius: '100%',
                  display: 'inline-block',
                  margin: '0 8px', backgroundColor: '#09821D'
                }}
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
              />
            );
          }
          return (
            <li
              style={{
                backgroundColor: 'transparent',
                width: 15,
                height: 15,
                borderRadius: '100%',
                borderWidth: 1,
                borderColor: '#09821D',
                display: 'inline-block',
                margin: '0 8px'
              }}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
            />
          );
        }}
      >
        <div className='flex flex-row w-full justify-between mb-14 md:mb-16 gap-3 px-2 mt-3'>
          <div className="w-full h-40 sm:h-48 md:h-56 xl:h-72 2xl:h-56 flex flex-row items-end relative">
            <div className='absolute z-10 h-full w-1/2 lg:w-5/12 xl:w-5/12 2xl:w-1/2 mb-3'>
              <div className="h-full w-full flex items-end">
                <Image src={'/images/plant-2.png'} height={1000} width={1000} style={{ objectFit: 'contain', height: 'auto', width: '100%' }} alt='plant image' />
              </div>
            </div>
            <div className="absolute w-full h-28 rounded-2xl flex justify-end bg-white drop-shadow-lg cursor-pointer">
              <div className="w-2/5 h-full flex justify-center items-start flex-col relative -left-10">
                <div className="font-poppins font-medium text-lightGreen text-sm italic">Outdoor</div>
                <div className="font-poppins font-bold text-3xl">Cannabis</div>
                <div className="font-poppins font-medium text-xl">$ 49.00</div>
              </div>
            </div>
          </div>
          <div className="w-full h-40 sm:h-48 md:h-56 xl:h-72 2xl:h-56 flex flex-row items-end relative">
            <div className='absolute z-10 h-full w-1/2 lg:w-5/12 xl:w-5/12 2xl:w-1/2 mb-3'>
              <div className="h-full w-full flex items-end">
                <Image src={'/images/plant-2.png'} height={1000} width={1000} style={{ objectFit: 'contain', height: 'auto', width: '100%' }} alt='plant image' />
              </div>
            </div>
            <div className="absolute w-full h-28 rounded-2xl flex justify-end bg-white drop-shadow-lg cursor-pointer">
              <div className="w-2/5 h-full flex justify-center items-start flex-col relative -left-10">
                <div className="font-poppins font-medium text-lightGreen text-sm italic">Outdoor</div>
                <div className="font-poppins font-bold text-3xl">Cannabis</div>
                <div className="font-poppins font-medium text-xl">$ 49.00</div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-row w-full justify-between md:mb-16 gap-3 px-2 mt-3'>
          <div className="w-full h-40 sm:h-48 md:h-56 xl:h-72 2xl:h-56 flex flex-row items-end relative">
            <div className='absolute z-10 h-full w-1/2 lg:w-5/12 xl:w-5/12 2xl:w-1/2 mb-3'>
              <div className="h-full w-full flex items-end">
                <Image src={'/images/plant-2.png'} height={1000} width={1000} style={{ objectFit: 'contain', height: 'auto', width: '100%' }} alt='plant image' />
              </div>
            </div>
            <div className="absolute w-full h-28 rounded-2xl flex justify-end bg-white drop-shadow-lg cursor-pointer">
              <div className="w-2/5 h-full flex justify-center items-start flex-col relative -left-10">
                <div className="font-poppins font-medium text-lightGreen text-sm italic">Outdoor</div>
                <div className="font-poppins font-bold text-3xl">Cannabis</div>
                <div className="font-poppins font-medium text-xl">$ 49.00</div>
              </div>
            </div>
          </div>
          <div className="w-full h-40 sm:h-48 md:h-56 xl:h-72 2xl:h-56 flex flex-row items-end relative">
            <div className='absolute z-10 h-full w-1/2 lg:w-5/12 xl:w-5/12 2xl:w-1/2 mb-3'>
              <div className="h-full w-full flex items-end">
                <Image src={'/images/plant-2.png'} height={1000} width={1000} style={{ objectFit: 'contain', height: 'auto', width: '100%' }} alt='plant image' />
              </div>
            </div>
            <div className="absolute w-full h-28 rounded-2xl flex justify-end bg-white drop-shadow-lg cursor-pointer">
              <div className="w-2/5 h-full flex justify-center items-start flex-col relative -left-10">
                <div className="font-poppins font-medium text-lightGreen text-sm italic">Outdoor</div>
                <div className="font-poppins font-bold text-3xl">Cannabis</div>
                <div className="font-poppins font-medium text-xl">$ 49.00</div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-row w-full justify-between md:mb-16 gap-3 px-2 mt-3'>
          <div className="w-full h-40 sm:h-48 md:h-56 xl:h-72 2xl:h-56 flex flex-row items-end relative">
            <div className='absolute z-10 h-full w-1/2 lg:w-5/12 xl:w-5/12 2xl:w-1/2 mb-3'>
              <div className="h-full w-full flex items-end">
                <Image src={'/images/plant-2.png'} height={1000} width={1000} style={{ objectFit: 'contain', height: 'auto', width: '100%' }} alt='plant image' />
              </div>
            </div>
            <div className="absolute w-full h-28 rounded-2xl flex justify-end bg-white drop-shadow-lg cursor-pointer">
              <div className="w-2/5 h-full flex justify-center items-start flex-col relative -left-10">
                <div className="font-poppins font-medium text-lightGreen text-sm italic">Outdoor</div>
                <div className="font-poppins font-bold text-3xl">Cannabis</div>
                <div className="font-poppins font-medium text-xl">$ 49.00</div>
              </div>
            </div>
          </div>
          <div className="w-full h-40 sm:h-48 md:h-56 xl:h-72 2xl:h-56 flex flex-row items-end relative">
            <div className='absolute z-10 h-full w-1/2 lg:w-5/12 xl:w-5/12 2xl:w-1/2 mb-3'>
              <div className="h-full w-full flex items-end">
                <Image src={'/images/plant-2.png'} height={1000} width={1000} style={{ objectFit: 'contain', height: 'auto', width: '100%' }} alt='plant image' />
              </div>
            </div>
            <div className="absolute w-full h-28 rounded-2xl flex justify-end bg-white drop-shadow-lg cursor-pointer">
              <div className="w-2/5 h-full flex justify-center items-start flex-col relative -left-10">
                <div className="font-poppins font-medium text-lightGreen text-sm italic">Outdoor</div>
                <div className="font-poppins font-bold text-3xl">Cannabis</div>
                <div className="font-poppins font-medium text-xl">$ 49.00</div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>

  )
}

export default CardCarousel
