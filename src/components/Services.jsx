import CarouselComponent from "./Carousel"
import cardImg from "../assets/card-img-1.jpg"

export default function 
() {
  const items = [
    {
      img:cardImg,
      title:"Title",
      description:"Non dolore incididunt reprehenderit duis sunt tempor sint."
    },
    {
      img:cardImg,
      title:"Title",
      description:"Non dolore incididunt reprehenderit duis sunt tempor sint."
    },
    {
      img:cardImg,
      title:"Title",
      description:"Non dolore incididunt reprehenderit duis sunt tempor sint."
    },
    {
      img:cardImg,
      title:"Title",
      description:"Non dolore incididunt reprehenderit duis sunt tempor sint."
    },
    {
      img:cardImg,
      title:"Title",
      description:"Non dolore incididunt reprehenderit duis sunt tempor sint."
    }
  ]
  return (
    <div id="Services" className='bg-white h-[700px]'>
      <CarouselComponent items={items}/>
    </div>
  )
}
