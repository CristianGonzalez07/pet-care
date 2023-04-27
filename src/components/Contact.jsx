import InfoCard from "./InfoCard";
import Form from "./Form";
import { motion } from "framer-motion";

export default function 
() {
  const infoArray = [
    {
      title:"Phone number",
      description:"+ 11 54 67 122",
      icon:"ic:baseline-phone-android"
    },
    {
      title:"Address",
      description:"New York, 1920",
      icon:"material-symbols:location-on-rounded"
    },
    {
      title:"Email",
      description:"some@example.com",
      icon:"ic:round-email"
    },
    {
      title:"Schedule",
      description:"8:00 - 19:00 mon - sat",
      icon:"material-symbols:nest-clock-farsight-analog-outline"
    },
    {
      title:"Emergencies 24/7",
      description:"+ 11 56 12 856",
      icon:"bx:health"
    }
  ];

  const inputs = [
    {
      type:"text",
      label:"name",
      error:<p className="text-red-600 font-sigmar text-xs">This field is required*</p>,
    },
    {
      type:"text",
      label:"email",
      error:<p className="text-red-600 font-sigmar text-xs">This field is required*</p>,
    },
    {
      type:"text",
      label:"message",
      error:<p className="text-red-600 font-sigmar text-xs">This field is required*</p>,
    }
  ];
  
  return (
    <motion.div 
      id="Contact" 
      className='h-[1400] lg:h-[1000px] w-full bg-texture bg-fixed pb-20'
      initial={{ y:"-50px", opacity:0 }}
      whileInView={{ y:0, opacity: 1 }}
      transition={{
        ease: "linear",
        duration: 0.7,
      }} 
    >
      <div className='pt-10 flex justify-center'>
        <div className='w-[90%] border-b-2 border-b-primary'/>
      </div>
      <div className='mt-10 flex justify-center'>
        <h1 className='font-sigmar text-primary-dark md:text-5xl text-3xl'>Contact us</h1>
      </div>
      <div className='mt-20 mx-10 md:mx-40 xl:mx-60 grid grid-cols-1 lg:grid-cols-2'>
        <motion.div
          initial={{ x:"200px", opacity: 0 }}
          whileInView={{ x:0, opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 1,
          }} 
        >
          {infoArray.map( (info, index) => <InfoCard info={info} key={`infoindex ${index}`}/>)}
        </motion.div>
        <motion.div
           initial={{ x:"-200px", opacity: 0 }}
           whileInView={{ x:0, opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 1,
          }} 
        >
          <Form inputs={inputs} onSubmit={(data) => console.log({data})}/>
        </motion.div>
      </div>
    </motion.div>
  )
}
