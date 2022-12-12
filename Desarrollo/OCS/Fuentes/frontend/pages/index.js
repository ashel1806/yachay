import Image from 'next/image';

import { useDispatch } from 'react-redux';

import { login } from '../redux/state/authSlice';


export default function Login() {
  const dispatch = useDispatch();

  const initialValues = {
    info: {
      nameUser: '',
      email: '',
      password: '',
    },
    details: {
      lastName: '',
    },
    role: '',
  };



  return (
    <section className="grid grid-cols-2 container mx-auto h-screen items-center p-0 m-0">
      <div className="mx-auto h-screen">
        <form>
          <div className="mx-auto h-screen bg-white  p-5 md:p-10 lg:p-15 xl:p-20  mb-4 rounded ">
            <div className="flex items-center justify-center">
              <Image
                alt="Yachay"
                src="/images/YachayL.jpg"
                width={92}
                height={92}
              />
            </div>
            <br></br>

            <div className="font-bold text-4xl pt-1000">Bienvenidos</div>
            <div className="pt-5 grid grid-cols-2">
              <div className=" text-ms col-span-2 text-slate-500">
                ¡Bienvenido de vuelta! Ingresa tus datos, por favor.
              </div>
            </div>
            <br></br>

            <div className="col-span-2 pt-4 pb-1.5">Correo Electrónico</div>
            <div className="col-span-2 pb-4">
              <input
                className="block bg-gray-100 w-full border  rounded-xl py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm "
                type="text"
                name="correo"
              />
            </div>

            <div className="col-span-2 pt-4 pb-1.5">Contraseña</div>
            <div className="col-span-2 pb-4">
              <input
                className="block bg-gray-100 w-full border  rounded-xl py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm "
                type="text"
                name="correo"
              />
            </div>

            <div className="flex flex-col ">
              <div className="grid grid-cols-2 text-sm">
                <div>
                  <input
                    type="checkbox"
                    className=" appareance-none indeterminate:bg-gray-300"
                  />
                  <p className="inline-block pl-1"> Recuerdame </p>
                </div>

                <div className="mx-auto pl-1 pt-0.5 text-sm">
                  <p className="inline-block text-white">
                    ....................
                  </p>
                  <p className="inline-block underline decoration-solid text-sky-500">
                    ¿Olvidaste tu contraseña?{' '}
                  </p>
                </div>
              </div>
              <br></br>

              <div className="pt-3 pb-3">
                <button
                  class="block bg-blue-500 w-full border border-blue-500 rounded-xl py-3 my-1 pl-3 pr-3 shadow-sm focus:outline-none sm:text-sm "
                  type="button"
                  name="Login"
                >
                  Iniciar Sesión
                </button>
              </div>
              <div className="pt-3 pb-3">
                <button
                  class="block bg-white-100 w-full border border-slate-300 rounded-xl py-3 my-2  pl-3 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm "
                  type="text"
                  name="LoginG"
                >
                  Iniciar Sesión con Google
                </button>
              </div>
              <div className="flex items-center justify-center text-slate-500">
                ¿Aun no tienes una cuenta? Regístrate{' '}
                <span className="pl-2 text-sky-500 underline decoration-solid">
                  {' '}
                  aquí
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="flex justify-center mx-auto h-screen bg-gray-100 ">
        <Image alt="login" src="/images/login.png" width={1000} height={1} />
      </div>
    </section>
  );
}
