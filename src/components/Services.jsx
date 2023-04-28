import { motion } from "framer-motion";
import cardImg from "../assets/card-img-1.jpg"
import Card from "./Card"

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
  ]
  return (
    <motion.div 
      id="Services" 
      className='bg-white h-full w-full flex justify-center items-center py-[100px] px-[10%]'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        ease: "linear",
        duration: 1,
      }} 
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full"> 
        {items.map(item => <Card value={item}/>)}
      </div>
    </motion.div>
  )
}
