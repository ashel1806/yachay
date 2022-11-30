import Image from "next/image";
import React from 'react';
import { BsFillGearFill, BsFillMoonFill, BsHouseDoor } from "react-icons/bs";
import { GiOpenBook, GiProgression } from "react-icons/gi";

function Navbar(){
  return (
    <div className="w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="ml-2 mr-10 mt-2 flex flex-col justify-start item-center">
        <Image src="/images/LOGOTIPO-AZUL.png" alt="/" width='100' height='100' />
        </div>
                <div className="flex mb-2 justify-start items-center gap-4 pl-2">
                  <h3 className="text-base text-gray-800 pl-2 group-hover:text-white font-semibold ">
                  Menu
                  </h3>
                </div>

              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <BsHouseDoor className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                 Inicio
                </h3>
              </div>
           
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <GiOpenBook className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                 Cursos
                </h3>
              </div>
           
            
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <GiProgression className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                 Progreso
                </h3>
              </div>
            
              <div className="mx-8 my-4 border-b border-black pb-4"></div>

              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <BsFillGearFill className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                 Configuracion
                </h3>
              </div>
            
        
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <BsFillMoonFill className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                 Modo Oscuro
                </h3>
              </div>

            <div className="mt-96 ">
                    <button>
                        <div className='card py-6 px-3 bg-gray'>
                            
                                  <div className='flex justify-start mr-2'>
                                        <img
                                            src="images/Avatar.png"
                                            alt="avatar"
                                            className='rounded-full shadow justify-start'
                                            width={50}
                                            height={50}
                                        />
                                        <div className="grid grid-rows-2 ml-2 font-sans">
                                          <p className='font-bold'>Lalisa Manobal</p>
                                          <p className='text-xs'>lalisa_manobal@blackpink.com</p>
                                        </div>
                                </div> 
                             
                        </div>
                    </button>  
            </div>
    </div>
    
  );
}

export default Navbar;