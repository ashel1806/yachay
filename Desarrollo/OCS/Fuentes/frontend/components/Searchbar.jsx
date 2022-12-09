import Link from 'next/link';
import React from 'react';

import { AiOutlineBell, AiOutlineShoppingCart } from "react-icons/ai";
function SearchBar(){
return (



<div className='bg-white h-20 flex items-center justify-end px-2 lg:px-5 dark:bg-gray-800 border-gray-600'>

<div className='col-span-2 '>
                <input className='block bg-gray-100 w-full border rounded-xl py-2 pl-10 pr-36 font-semibold shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm 'type='text' name='buscar' placeholder='Buscar'/>
</div>

<div>
    <div class="flex justify-between flex-row-reverse space-x-4 space-x-reverse">

    <Link href='detalleusuario'>
    <div className="flex mb-2 justify-start items-center gap-4 pl-5  p-2 pr-5 rounded-md group cursor-pointer  m-auto">
    <img
                                            src="images/Avatar.png"
                                            alt="avatar"
                                            className='rounded-full shadow justify-start'
                                            width={50}
                                            height={50}
                                        />
    </div>
    </Link>
    <div className="flex mb-5 justify-start items-center gap-4 pl-5 p-2 rounded-md group cursor-pointer  m-auto">
                <AiOutlineBell className="text-2xl text-gray-600 group-hover:text-gray-400 " />
    </div>

    <div className="flex mb-5 justify-start items-center gap-4 pl-5 p-2 rounded-md group cursor-pointer m-auto">
                <AiOutlineShoppingCart className="text-2xl text-gray-600 group-hover:text-gray-400 " />
    </div>         
    </div>
</div>



</div>

);

}
export default SearchBar;