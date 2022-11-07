import Link from 'next/link'
import React from 'react'

export default function ProductItems({categoria}) {
  return (
    <div className='card py-6 px-6'>
        
        <Link href={`/categoria/${categoria.slug}`}> 
        <a>
            <img
                src={categoria.categoryimg}
                alt={categoria.category}
                className='rounded shadow'
            />
        </a>
        </Link>

        <div className='flex flex-col items-center justify-center'>
            <Link href={`/categoria/${categoria.slug}`}>
                <a>
                    <h2 className='my-2 text-lg font-semibold hover:text-left'>{categoria.category}</h2>
                </a>
            </Link>
            <p className='mb-2 text-left'>{categoria.description}</p>
        </div>
    </div>
  )
}
