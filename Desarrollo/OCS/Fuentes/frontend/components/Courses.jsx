import { Progress } from "@material-tailwind/react";
import Link from 'next/link';
import React from 'react';
import { BsPeople, BsShieldCheck } from "react-icons/bs";
import { GrDocumentText } from "react-icons/gr";

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

            <div className='flex ml-7 my-3 items-center grid-cols-3 gap-5' >
                <div className='flex mx-3 my-3 justify-start items-center grid-cols-3 gap-3'>
                    <GrDocumentText className="text-2xl text-gray-600"/>
                    <p className='text-gray-600'>{popular.doc}</p>
                    <p className='text-gray-600 md:grid-cols-3'> | </p>
                </div>

                <div className='flex mx-3 my-3 justify-start items-center grid-cols-3 gap-3'>
                    <BsShieldCheck className="text-2xl text-gray-600"/>
                    <p className='text-gray-600'>{popular.validacion}</p>
                    <p className='text-gray-600 md:grid-cols-3 ml-4'> | </p>
                </div>
                <div className='flex mx-3 my-3 justify-start items-center grid-cols-3 gap-3'>
                    <BsPeople className="text-2xl text-gray-600"/>
                    <p className='text-gray-600'>{popular.alumnos}</p>
                </div>

            </div>

            <div className='w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700'>
            <Progress className="rounded-full" value={popular.progreso} label="Completedo" />
            </div>
            <p className='mt-3 text-gray-600'>Progreso:{popular.progress}</p>


                
            
        </div>
    </div>
  )
}
