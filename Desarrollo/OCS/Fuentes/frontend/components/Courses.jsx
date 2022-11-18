import Link from 'next/link'
import React from 'react'

export default function Courses({popular}) {
  return (
    <div className='card py-4 px-4 '>
        
        <Link href={`/popular/${popular.slug}`}> 
        <a>
            <img
                src={popular.courseimg}
                alt={popular.course}
                className='rounded shadow '
            />
        </a>
        </Link>

        <div className='flex flex-col items-start justify-center font-semibold'>
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
            <p className='my-4 ml-1'>{popular.teacher}</p>
                
            </div>
            
           
        </div>
    </div>
  )
}
