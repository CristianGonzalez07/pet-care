import Carousel from 'react-grid-carousel'
import { Icon } from '@iconify/react';
import Card from './Card';

export default function CarouselComponent({ items }) {
  const MyDot = ({ isActive }) => (
    <span className={`${isActive ? "h-[8px] w-[8px] bg-primary" : "h-[5px] w-[5px] bg-gray-400"} inline-block rounded-full`}></span>
  )
  return (
    <div className='h-full w-full flex justify-center items-center'>
      <div className="w-[90%] md:w-[70%] h-full pt-20">
        <Carousel
          cols={2} loop showDots dot={MyDot}
          arrowLeft={<Icon className="inline h-[50px] w-[50px] text-primary absolute top-[40%] left-[-30px] cursor-pointer" icon="material-symbols:arrow-circle-left-rounded"/>}
          arrowRight={<Icon className="inline h-[50px] w-[50px] text-primary absolute top-[40%] right-[-30px] cursor-pointer" icon="material-symbols:arrow-circle-right"/>}
          responsiveLayout={
            [
              {
                breakpoint: 1024,
                cols: 2,
                loop: true,
              },
              {
                breakpoint: 768,
                cols: 1,
                loop: true,
              }
            ]
          }
        >
          {
            items.map(item => {
              return(
                <Carousel.Item>
                  <Card value={item}/>
                </Carousel.Item>
              )
            })
          }
        </Carousel>
      </div>
    </div>
  )
}
