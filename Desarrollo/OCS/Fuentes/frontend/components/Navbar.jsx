import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from 'react';
import { BsFillGearFill, BsFillMoonFill, BsFillSunFill, BsHouseDoor } from "react-icons/bs";
import { GiOpenBook, GiProgression } from "react-icons/gi";



function Navbar(){
  const {setTheme,theme,systemTheme} = useTheme()

  const renderThemeChanger = () =>{
    const currentTheme=theme==='system'? systemTheme :theme;
    if(currentTheme==='dark'){
      return(
        <button onClick={()=>setTheme('light')}>
        <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-blue-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <BsFillSunFill className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold dark:text-gray-600">
                 Modo Oscuro
                </h3>
              </div>
          </button>
      )
    }
    else{
      return(
        <button onClick={()=>setTheme('dark')} >

              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-blue-500 p-2 mr-8 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <BsFillMoonFill className="text-2xl text-gray-600 group-hover:text-white "/>
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold dark:text-gray-600">
                 Modo Oscuro
                </h3>
              </div>
        
        </button>
      )
    }
  }
  return (
    <div className="w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200 dark:bg-gray-800 border-gray-600">
          <div className="ml-2 mr-10 mt-2 flex flex-col justify-start item-center">
        <Image src="/images/LOGOTIPO-AZUL.png" alt="/" width='100' height='100' />
        </div>
              <Link href='/'>
                <div className="flex mb-2 justify-start items-center gap-4 pl-2">
                  <h3 className="text-base text-gray-800 pl-2 group-hover:text-white font-semibold dark:text-gray-600">
                  Menu
                  </h3>
                </div>
              </Link>

              <Link href='/Inicio'>
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-blue-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <BsHouseDoor className="text-2xl text-gray-600 group-hover:text-white " />
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold dark:text-gray-600">
                  Inicio
                  </h3>
                </div>
              </Link>

              <Link href='/VerCursos'>
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-blue-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <GiOpenBook className="text-2xl text-gray-600 group-hover:text-white " />
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold dark:text-gray-600">
                  Cursos
                  </h3>
                </div>
              </Link>
            
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-blue-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <GiProgression className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold dark:text-gray-600">
                 Progreso
                </h3>
              </div>
            
              <div className="mx-8 my-4 border-b border-black pb-4 dark:border-gray-600"></div>

              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-blue-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <BsFillGearFill className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold dark:text-gray-600">
                 Configuracion
                </h3>
              </div>
            
        
              

            {renderThemeChanger()}
            <Link href='/detalleusuario'>
            <div className="mt-96 ">
                    <button>
                        <div className='card py-6 px-3 bg-gray '>
                            
                                  <div className='flex justify-start mr-2'>
                                        <img
                                            src="images/Avatar.png"
                                            alt="avatar"
                                            className='rounded-full shadow justify-start'
                                            width={50}
                                            height={50}
                                        />
                                        <div className="grid grid-rows-2 ml-2 font-sans">
                                          <p className='font-bold '>Lalisa Manobal</p>
                                          <p className='text-xs dark:text-gray-600'>lalisa_manobal@blackpink.com</p>
                                        </div>
                                </div> 
                             
                        </div>
                    </button>  
            </div>
            </Link>
    </div>
    
  );
}

export default Navbar;