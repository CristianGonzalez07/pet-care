import { motion } from "framer-motion";
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
    <motion.div 
      id="Services" 
      className='bg-white h-[700px]'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        ease: "linear",
        duration: 1,
      }} 
    >
      <CarouselComponent items={items} />
    </motion.div>
  )
}
