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
      className='bg-white h-[700px] flex justify-center items-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        ease: "linear",
        duration: 1,
      }} 
    >
      <div className="w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"> 
        {items.map(item => <Card value={item}/>)}
      </div>
    </motion.div>
  )
}
