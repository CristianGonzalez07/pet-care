import { motion } from "framer-motion";

export default function About() {
  return (
    <div id="About" className='bg-primary h-[500px] w-full grid grid-cols-6'>
      <div className='col-start-2 mt-10 col-span-4'>
        <motion.h1 
          className='text-white font-sigmar text-xl md:text-3xl lg:text-5xl'
          initial={{ scale:0.5, opacity:0 }}
          animate={{ scale:1, opacity:1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.7
          }}  
        >
          About us
        </motion.h1>
        <motion.p 
          className='mt-10 text-white font-sigmar text-xs md:text-lg lg:text-xl'
          initial={{ scale:0.5, opacity:0 }}
          animate={{ scale:1, opacity:1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.7
          }} 
        >
          Donec feugiat lectus mi, nec scelerisque massa viverraac. Vivam vestibulum ornare imperdiet. Nam et sagittis diam. Maecenasma ximus fringilla viverra. Quisque malesuada enim sed aliquam feugiat. Curabitur id sem eu velit eleifend tincidunt.
Curabitur et lorem et dolor iaculis convallis. Curabitur interdum ipsum convallis porttitor vulputate. Morbi sed massa at dui congue porttitor eget nec magna.</motion.p>
      </div>
    </div>
  )
}
