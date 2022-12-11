import React , {useState} from 'react';
import { AiOutlineBell, AiOutlineShoppingCart } from 'react-icons/ai';
import Image from 'next/image';

const Carrito = () => {
    const [toggle,setToggle]=useState(false)
return(
    <div>
        <button onClick={()=> setToggle(!toggle)} className="flex mb-5 justify-start items-center gap-4 pl-5 p-2 rounded-md group m-auto">
        <AiOutlineShoppingCart className="text-2xl text-gray-600 mt-12 group-hover:text-gray-400 " />
        </button>

        {toggle &&(
        <div className="border-2 border-sky-500 bg-white p-2 rounded-lg ">
            <div className="z-10 grid grid-rows-2 ">
                <div className="mb-1">
                    <div className="flex flex-row items-center justify-end"> <Image className="rounded-lg mr-2" src="/images/ilustrator.png" width={70} height={40} /> Curso de A.Ilustrator</div>
                </div>
                <div>
                    <button className="flex flex-row items-center justify-center bg-sky-500 text-white rounded-2xl py-2 px-4 ml-10">Pagar</button>
                </div>
            </div>
        </div>
        )}

    </div>
    )
}

export default Carrito;
