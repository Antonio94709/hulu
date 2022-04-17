import { useRouter } from 'next/router'
import request from '../utils/request'

const Nav = () => {
const router = useRouter()

  return (
    <nav className='relative'>
      <div className="flex px-10 sm:px-20 text-xl whitespace-nowrap space-x-10 overflow-x-scroll scrollbar-hide">
        {Object.entries(request).map(([key,{title, url}]) => (
          <div 
          key={key}
          onClick={()=> router.push(`/?genre=${key}`)} 
          className="transition hover:scale-125 cursor-pointer  duration-100 transform hover:text-white active:text-red-500 ">
            {title}
          </div>
        ))}
      </div>
      <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12'/>
    </nav>
  )
}

export default Nav

 