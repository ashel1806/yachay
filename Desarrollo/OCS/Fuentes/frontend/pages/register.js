import Image from 'next/image';

export default function register() {
  return (
    <section className="flex flex-row container mx-auto h-screen items-center ">
      <div className="hidden md:inline-block">
        <div className="flex items-center justify-center mx-auto h-screen bg-gray-100 ">
          <Image src="/images/RegisterImage.jpg" width={1000} height={1000} />
        </div>
      </div>

      <div className="flex items-center justify-center mx-auto h-screen ">
        <form>
          <div className="mx-auto h-screen bg-white  p-5 md:p-10 lg:p-15 xl:p-20  mb-4 rounded ">
            <div className="flex items-center justify-center">
              <Image src="/images/YachayL.png" width={92} height={92} />
            </div>
            <div className="font-bold text-4xl">Registrarse</div>
            <div className="pt-5 grid grid-cols-2">
              <div className="col-span-2">¿Cuál es tu función?</div>
              <div className="pr-1 pt-3 pb-3">
                <button
                  className="block bg-gray-100 w-full border border-slate-300 rounded-xl py-2 pl-3 pr-3 shadow-sm hover:outline-none hover:border-gray-500  text-sm "
                  type="button"
                  name="nombre"
                >
                  Estudiante
                </button>
              </div>
              <div className="pl-1 pt-3 pb-3">
                <button
                  className="block bg-gray-100 w-full border border-slate-300 rounded-xl py-2 pl-3 pr-3 shadow-sm hover:outline-none hover:border-gray-500  text-sm "
                  type="button"
                  name="nombre"
                >
                  Profesor
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="pb-1.5">Nombre</div>
              <div>Apellido</div>
              <div className="pr-1">
                <input
                  className="block bg-gray-100 w-full border  rounded-xl py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm "
                  type="text"
                  name="nombre"
                />
              </div>
              <div className="pl-1">
                <input
                  className=" block bg-gray-100 w-full border  rounded-xl py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm "
                  type="text"
                  name="apellido"
                />
              </div>
              <div className="col-span-2 pt-4 pb-1.5">Correo Electrónico</div>
              <div className="col-span-2 pb-4">
                <input
                  className="block bg-gray-100 w-full border  rounded-xl py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm "
                  type="text"
                  name="correo"
                />
              </div>
              <div className="pb-1.5 ">Contraseña</div>
              <div>Confirmar Contraseña</div>
              <div className="flex flex-row-reverse items-center pr-1 pb-3">
                <input
                  className="block bg-gray-100 w-full border  rounded-xl py-2 pl-3 pr-8 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm "
                  type="password"
                  name="contraseña"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="absolute w-8 h-8 pr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="flex flex-row-reverse items-center pl-1 pb-3">
                <input
                  className="block bg-gray-100 w-full border  rounded-xl py-2 pl-3 pr-8 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm "
                  type="password"
                  name="comContraseña"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="absolute w-8 h-8 pr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col ">
              <div className="inline-flex flex-row ">
                <div>
                  <input
                    type="checkbox"
                    className=" appareance-none indeterminate:bg-gray-300"
                  />
                </div>
                <div className="mx-auto pl-1 pt-0.5 text-sm text-gray-500">
                  Al registrarme acepto los{' '}
                  <p className="inline-block underline decoration-solid text-sky-500">
                    términos y condiciones
                  </p>{' '}
                  y{' '}
                  <p className="inline-block underline decoration-solid text-sky-500">
                    la politica de privacidad
                  </p>{' '}
                  de OnlyCourses
                </div>
              </div>
              <div className="pt-3 pb-3">
                <button
                  className="block bg-blue-500 w-full border border-blue-500 rounded-xl py-2 pl-3 pr-3 shadow-sm focus:outline-none sm:text-sm "
                  type="button"
                  name="register"
                >
                  Registrarme
                </button>
              </div>
              <div className="pt-3 pb-3">
                <button
                  className="block bg-white-100 w-full border border-slate-300 rounded-xl pl-3 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm "
                  type="text"
                  name="registerG"
                >
                  <div className="flex flex-row items-center justify-center">
                    <div>
                      <Image
                        src={'/images/g_icon.svg'}
                        width={33}
                        height={33}
                      />
                    </div>
                    <div className="justify-center">Registrarme con Google</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
