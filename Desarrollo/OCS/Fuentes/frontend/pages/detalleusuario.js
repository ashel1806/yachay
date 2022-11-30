import Image from 'next/image';
import React from 'react';
import Navbar from '../components/Navbar';
import SearchBar from "../components/Searchbar";

export default function descriptioncourse() {
    return ( 
        <div>
            <Navbar/>
            <SearchBar/>
            <div className="flex flex-col container mx-auto h-screen items-center justify-center bg-gray-100">

                <div className="grid grid-rows-2 ml-10 mt-20">
                    
                    <div>
                        <div className="text-3xl mb-7 ">
                            Mi perfil
                        </div>
                        <div className="flex flex-row ">
                            <div>
                                <div className="flex flex-row container mx-auto">
                                    <div>
                                        <Image src="/images/fotoperfil.png" width={250} height={250} className="rounded-full"/>
                                    </div>
                                    <div className="flex flex-col container items-center justify-center">
                                        <button className="bg-white rounded-2xl text-2xl py-3 px-20  mt-5 mb-2.5 mr-20 ml-5 border border-blue-500" > Cambiar foto</button>
                                        <button className="bg-white rounded-2xl text-2xl py-3 px-20 mb-3 mr-20 ml-5 border border-blue-500"> Eliminar foto</button>
                                    </div>
                                </div>
                            </div>

                            <div className="border-l-2 border-l-neutral-900">
                                <div className="flex flex-col container items-center justify-center">
                                    <div>
                                        <form>
                                            <div className="flex flex-row mb-4">
                                                <div className="ml-14 mr-8 text-2xl"> <label for="name"> Nombre : </label></div>
                                                <div><input id="name" className="pl-10 pr-20 py-3 mx-5 mb-3  rounded-xl"></input></div>
                                                <button className="bg-white rounded-2xl text-xl py-2 px-10  mb-3 mr-5 border border-blue-500"> Editar </button>
                                            </div>
                                            <div className="flex flex-row mb-4">
                                                <div  className="ml-14 mr-8 text-2xl" ><label for="apellido">Apellido :</label></div>
                                                <div><input id="apellido" className="size-lg pl-10 pr-20 py-3 mx-5 mb-3  rounded-xl"></input></div>
                                                <button className="bg-white rounded-2xl text-xl py-2 px-10  mb-3 mr-5 border border-blue-500"> Editar </button>
                                            </div>
                                            <div className="flex flex-row mb-4">
                                                <div  className="ml-14  mr-8 text-2xl" ><label for="Correo"> Correo   : </label></div>
                                                <div><input id="email" type="email" className="size-md pl-10 pr-20 py-3 mx-5 mb-3  rounded-xl"></input></div>
                                                <button className="bg-white rounded-2xl text-xl py-2 px-10  mb-3 mr-5 border border-blue-500"> Editar </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-20">
                            <h2 className="text-3xl mb-5"> Datos Adicionales</h2>
                            <p className="text-xl leading-8">Llenar estos campos no es obligatorio, sin embargo, te pueden ayudar a personalizar la información que se muestra a los estudiantes de la plataforma y 
                            <br></br>aumentar la seguridad de tu cuenta. </p>
                        </div>

                    </div>    


        

                    <div>
                        <div  className="grid grid-cols-3 ">
                            <div className="col-span-2">
                                <div className="grid grid-cols-12">
                                    
                                        <div className="col-span-5 grid grid-rows-3">
                                            <div className="ml-14 mr-8 text-2xl mr-20"> <label for="name"> Facultad : </label></div>
                                            <div  className="ml-14 mr-8 text-2xl" ><label for="apellido">Número de Telefono :</label></div>
                                            <div  className="ml-14  mr-8 text-2xl" ><label for="Correo"> Correo de Recuperación: </label></div>
                                            
                                        </div>
                                        <div className="col-span-5 grid grid-rows-3">
                                            <div><input id="name" className="pl-10 pr-20 py-3 mx-5 mb-3  rounded-xl "></input></div>
                                            <div><input id="email" type="email" className="size-md pl-10 pr-20 py-3 mx-5 mb-3  rounded-xl "></input></div>
                                            <div><input id="apellido" className="size-lg pl-10 pr-20 py-3 mx-5 mb-3  rounded-xl"></input></div>
                                           
                                        </div>
                                        <div className=" col-span-2 grid grid-rows-3">
                                            <button className="bg-white rounded-2xl text-xl py-2 px-10  mb-5 mr-5 border border-blue-500"> Editar </button>
                                            <button className="bg-white rounded-2xl text-xl py-2 px-10  mb-5 mr-5 border border-blue-500"> Editar </button>
                                            <button className="bg-white rounded-2xl text-xl py-2 px-10  mb-5 mr-5 border border-blue-500"> Editar </button>
                                        </div>
                                     
                                </div>
                            </div>

                            <div className=" col-span-1 grid grid-rows-3">
                                            <button className="bg-white rounded-2xl text-xl py-2 px-5   border border-blue-500"> Editar </button>
                                            <button className="bg-white rounded-2xl text-xl py-2 px-5   border border-blue-500"> Editar </button>
                                            <button className="bg-white rounded-2xl text-xl py-2 px-5  border border-blue-500"> Editar </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        );
    }