import { Icon } from '@iconify/react';

export default function InfoCard({info}) {
  return (
    <div className='grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 justify-center mb-10'>
      <div className='rounded-full bg-primary md:h-20 md:w-20 h-16 w-16 flex justify-center items-center'>
        {info.icon && <Icon className="inline text-4xl md:text-5xl text-white" icon={info.icon}/>}
      </div>
      <div className='col-span-2 md:col-span-3 flex md:py-3 py-1'>
        <div>
          <h1 className='font-sigmar text-primary-dark text-xl md:text-2xl'>{info.title}</h1>
          <h2 className='font-sigmar text-primary-dark text-sm md:text-xl'>{info.description}</h2>
        </div>
      </div>
    </div>
  )
}
