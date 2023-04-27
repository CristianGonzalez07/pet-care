import { Icon } from '@iconify/react';
import { motion } from "framer-motion";

export default function Button({text, icon, onClick}) {
  return (
    <motion.button 
      className="rounded-[10px] lg:rounded-[20px] text-white bg-primary font-sigmar md:p-3 lg:p-5 p-2"
      type="submit"
      onClick={onClick} 
      initial={{ scale:0.5, opacity:0 }}
      animate={{ scale:1, opacity:1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7
      }} 
    >
      {icon && <Icon className="inline text-xs md:text-md lg:text-xl" icon={icon}/>}
      <span className="ml-1 text-xs md:text-md lg:text-xl">
        {text}
      </span>
    </motion.button>
  )
}
