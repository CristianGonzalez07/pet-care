import { Icon } from '@iconify/react';

export default function Footer() {
  return (
    <div className='h-[100px] bg-primary-dark grid md:grid-cols-3 grid-cols-1 pt-2 absolute w-full'>
      <div className='flex items-center justify-center'>
        <p className='text-white font-sigmar text-xs '>© 2023 All rights reserved.</p>
      </div>
      <div className='flex items-center justify-center'>
        <a href='https://www.instagram.com' target='_blank'>
          <Icon className="inline md:h-[40px] md:w-[40px] text-white mr-2" icon="mdi:instagram"/>
        </a>
        <a href='https://www.facebook.com' target='_blank'>
          <Icon className="inline md:h-[40px] md:w-[40px] text-white mr-2" icon="ic:baseline-facebook"/>
        </a>
        <a href='https://www.twitter.com' target='_blank'>
          <Icon className="inline md:h-[40px] md:w-[40px] text-white mr-2" icon="tabler:brand-twitter-filled"/>
        </a>
        <a href='https://www.youtube.com' target='_blank'>
          <Icon className="inline h- md:h-[40px] md:w-[40px] text-white" icon="ri:youtube-fill"/>
        </a>      
      </div>
      <div className='relative'>
        <button 
          className='absolute bottom-6 right-4'
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }}>
          <Icon className="inline h-[40px] w-[40px] text-white" icon="solar:round-alt-arrow-up-linear"/>
        </button>
      </div>
    </div>
  )
}
