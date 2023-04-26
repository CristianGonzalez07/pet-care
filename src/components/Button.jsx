import { Icon } from '@iconify/react';

export default function Button({text, icon}) {
  return (
    <button type="submit" className="rounded-[10px] lg:rounded-[20px] text-white bg-primary font-sigmar md:p-3 lg:p-5 p-2">
        {icon && <Icon className="inline text-xs md:text-md lg:text-xl" icon={icon}/>}
        <span className="ml-1 text-xs md:text-md lg:text-xl">
          {text}
        </span>
    </button>
  )
}
