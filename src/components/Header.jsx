import { motion } from "framer-motion";
import Navbar from "./Navbar"
import HeaderImg from "../assets/Header-img.png"
import Button from "./Button";
// import Wave from "../assets/Wave.svg"


export default function Header() {

  const onClick = (e) => {
    e.preventDefault();
    const element = document.getElementById("Contact");
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }

  return (
    <div id="Home" className="bg-texture bg-fixed bg-no-repeat h-[700px] lg:h-[800px] w-full">
      <Navbar/>
      <div className="h-[75%] lg:h-full w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 md:h-full w-full h-[50%]">
          <motion.div className="xl:col-start-2 lg:col-span-2 xl:col-span-3 ml-[10%] mt-[10%]">
            <motion.h1 
              initial={{ y:"-50px", opacity:0 }}
              animate={{ y:0, opacity:1 }}
              transition={{
                ease: "linear",
                duration: 0.5,
              }}  
            >
              <span className="text-primary-dark font-sigmar lg:text-5xl md:text-4xl text-md">Welcome to </span>
              <span className="text-primary font-sigmar lg:text-5xl md:text-4xl text-md">Pet care</span>
            </motion.h1>
            <motion.h2 
              className="text-primary-light font-sigmar mt-[5%]"
              initial={{ x:"-50px", opacity:0 }}
              animate={{ x:0, opacity:1 }}
              transition={{ type: "spring", stiffness: 100, delay:0.3 }} 
            >
              <p className="md:text-xl lg:text-2xl text-xs">We offer the highest quality care</p>
              <p className="md:text-xl lg:text-2xl text-xs">for your adorable pets.</p>
            </motion.h2>
            <div className="w-full h-full lg:ml-20 mt-10">
              <Button 
                text="Make an appointment" 
                icon="mdi:calendar-check"
                onClick={onClick}
              />
            </div>
          </motion.div>
          <motion.div 
            className="h-full w-full flex items-center justify-center md:col-start-2 lg:col-start-3 xl:col-start-5 lg:col-span-3"
            initial={{ x:"50px", opacity:0 }}
              animate={{ x:0, opacity:1 }}
              transition={{
                ease: "linear",
                duration: 0.5,
              }} 
          >
            <img className="" src={HeaderImg}></img>
          </motion.div>
        </div>
      </div>
    </div>
  )
}