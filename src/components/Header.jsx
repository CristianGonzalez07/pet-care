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
    <div id="Home" className="bg-texture bg-fixed bg-no-repeat w-full">
      <Navbar/>
      <div className="">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 w-full">
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
              <img src={HeaderImg}></img>
            </motion.div>
          </div>
        </div>
        <svg className="translate-y-[1px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#8332AC" fill-opacity="1" d="M0,96L80,117.3C160,139,320,181,480,181.3C640,181,800,139,960,133.3C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  )
}