import Link from 'next/link'
import React from 'react'
import { AiOutlineHeart } from "react-icons/ai"

export default function Favorites({popular}) {
  return (
    <div className='card py-6 px-6 '>
        
        <Link href={`/popular/${popular.slug}`}> 
        <a>
            <img
                src={popular.courseimg}
                alt={popular.course}
                className='rounded shadow '
            />
        </a>
        </Link>
        <div className='flex flex-col items-center justify-center font-semibold'>
            <Link href={`/popular/${popular.slug}`}>
                <a>
                    <h2 className='text-lg'>{popular.course}</h2>
                </a>
            </Link>
            
            <div className='flex justify-start'>
            <img
                src={popular.teacherimg}
                alt={popular.teacher}
                className='rounded-full shadow justify-start mx-2'
                width={50}
                height={50}
            />
            <p className='my-4'>{popular.teacher}</p>
                <div className='flex my-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 rounded-md group cursor-pointer hover:shadow-lg m-auto font-semibold text-left'>
                <AiOutlineHeart className="text-2xl text-gray-600 group-hover:text-gray-400 " />
                <p className='text-2xl text-gray-600 group-hover:text-gray-400'>{popular.favorites}</p>
                </div>
            </div>
            
           
        </div>
    </div>
  )
}
