import Image from 'next/image';
import Navbar from '../components/Navbar';
import SearchBar from '../components/Searchbar';
export default function Pago() {
  return (
    <>
      <div>
        <Navbar />
        <SearchBar />
        <div className="h-screen flex justify-end  gap-x-4">
          <div className="sm:w-96"></div>
          <div className="grid grid-cols-3 gap-x-14">
            <div className="flex-col mx-10">
              <div className="text-3xl font-semibold py-10">Resumen:</div>
              <div className="grid grid-cols-2 gap-y-3 ">
                <div className="place-self-start">Precio Total: </div>
                <div className="place-self-end text-red-600">S/.180.00</div>
                <div className="border-b-2 pb-3 border-gray-400 col-span-2 ">
                  <div className="grid grid-cols-2">
                    <div className="place-self-start ">Descuentos:</div>
                    <div className="place-self-end">S/0.00</div>
                  </div>
                </div>

                <div className="place-self-start">Total: </div>
                <div className="place-self-end">S/.180.00</div>

                <div className="col-span-2 pt-3 pb-3 ">
                  <button
                    className="block bg-blue-500 w-full border border-blue-500 rounded-xl py-2 pl-3 pr-3 shadow-sm focus:outline-none sm:text-sm "
                    type="button"
                    name="register"
                  >
                    <p className="text-white">Completar Pago</p>
                  </button>
                </div>
                <div className="col-span-2 text-xs">
                  Al realizar la compra acepta nuestros{' '}
                  <p className="inline-block text-blue-400  underline underline-offset-2">
                    terminos y condiciones
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-col">
              <div className="text-3xl font-semibold py-10">Pagar:</div>
              <div className="grid grid-cols-2 gap-y-4 ">
                <div className="place-self-start">Elegir pais</div>
                <div className="place-self-end text-gray-400 text-sm">
                  (Obligatorio)
                </div>
                <div className="col-span-2">
                  <input
                    className="block bg-gray-100 w-full border  rounded-xl py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm "
                    type="text"
                  />
                </div>
                <div className="place-self-start">Método de Pago</div>
                <div className="place-self-end text-gray-400 text-sm">
                  (Conexión Segura)
                </div>
                <div className="flex flex-row gap-x-2 item-center ">
                  <input
                    className="peer/Tarjeta de Crédito/débito"
                    type="radio"
                  />
                  <Image
                    alt="credit card"
                    src={'/images/credit-card-solid.png'}
                    width={35}
                    height={15}
                  />
                  <label className="inline-block">
                    Tarjeta de Crédito/débito
                  </label>
                </div>
                <div className="flex justify-end gap-x-2">
                  <div>
                    <Image
                      src={'/images/card-amex.png'}
                      alt="American Express"
                      width={30}
                      height={25}
                    />
                  </div>
                  <div>
                    <Image
                      src={'/images/card-mastercard.png'}
                      alt="American Express"
                      width={30}
                      height={25}
                    />
                  </div>
                  <div>
                    <Image
                      src={'/images/card-visa.png'}
                      alt="American Express"
                      width={30}
                      height={25}
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-x-3 item-center">
                  <input
                    className="peer/Tarjeta de Crédito/débito"
                    type="radio"
                  />
                  <Image
                    alt="PayPal"
                    src={'/images/paypal-brands.png'}
                    width={25}
                    height={30}
                  />
                  <label>Paypal</label>
                </div>
                <div className="col-span-2">Pedido</div>
                <div className="justify-start">
                  <Image
                    src={'/images/AdobeI.png'}
                    alt="Adobe"
                    width={150}
                    height={75}
                  />
                </div>
                <div className="self-center font-medium">
                  Adobe Ilustrator desde cero hasta nivel avanzado
                </div>
                <div className="justify-start">
                  <Image
                    src={'/images/ProgElon.png'}
                    alt="Elon"
                    width={150}
                    height={75}
                  />
                </div>
                <div className="self-center font-medium">
                  Programación desde cero hasta ser Elon Musk{' '}
                </div>
                <div className="justify-start">
                  <Image
                    src={'/images/Phyton.png'}
                    alt="POO"
                    width={150}
                    height={75}
                  />
                </div>
                <div className="self-center font-medium">
                  Python desde cero hasta POO{' '}
                </div>
              </div>
            </div>
            <div className="flex-col pr-10">
              <div className="sm:h-20"></div>
              <div className=" pb-6 border-l-2 border-gray-400 pl-10">
                <Image
                  src={'/images/credit-card.png'}
                  alt="credit"
                  width={400}
                  height={200}
                />
              </div>
              <div className="grid grid-cols-2 gap-y-4 gap-x-2 border-l-2 border-gray-400 pl-10 ">
                <div className="col-span-2">Nombre del Titular</div>
                <div className="col-span-2">
                  <input
                    className="block bg-gray-100 w-full border  rounded-xl py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm "
                    type="text"
                    placeholder="Nombre del Propietario"
                  />
                </div>
                <div className="col-span-2">Número de la Tarjeta</div>
                <div className="col-span-2">
                  <input
                    className="block bg-gray-100 w-full border  rounded-xl py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm "
                    type="text"
                    placeholder="0000 0000 0000 0000"
                  />
                </div>
                <div>CVC / CVV</div>
                <div>Fecha de Vencimiento</div>
                <div>
                  <input
                    className="block bg-gray-100 w-full border  rounded-xl py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm "
                    type="text"
                    placeholder="CVV"
                  />
                </div>
                <div>
                  <input
                    className="block bg-gray-100 w-full border  rounded-xl py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm "
                    type="text"
                    placeholder="MM/AA"
                  />
                </div>
                <div className="col-span-2">
                  <input
                    type="checkbox"
                    className=" appareance-none indeterminate:bg-gray-300"
                  />
                  <p className="inline-block text-xs pl-1 text-gray-400">
                    Guardar esta tarjeta de forma segura para comprar más
                    adelante
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
