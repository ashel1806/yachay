import Image from 'next/image';
import React from 'react';
import Navbar from "../../components/navbar";
import SearchBar from "../../components/Searchbar";


export default function descriptioncourse() {
  return (
    <div>
      <Navbar/>
      <SearchBar/>
      <div className="flex flex-row items-center justify-end">
        <div className="flex flex-row container h-screen items-center justify-center bg-gray-100">
          <div className="grid grid-cols-2">
            <div className="col-span-2 text-blue-500 pl-6 ">
              <strong>Marketing y diseño</strong>
            </div>
            <div className="col-span-2 text-4xl pl-6 py-4">
              <strong>Adobe Ilustrator desde cero hasta nivel avanzado</strong>
            </div>
            <div className="col-span-2 text-lg text-gray-400 pl-6 py-3">
              Aprende todo sobre dibujo vectorial con Illustrator y sé un experto:
              de dibujos  simples a gráficos complejos y avanzados
            </div>
            <div className="text-sm pl-6 pt-3">
              <ul>
                <li>
                  Docente:{' '}
                  <p className="text-blue-500 underline underline-offset-2 inline-block">
                    Sovieseshu Vikt
                  </p>
                </li>
                <li>Ultima actualización: Junio, 2022</li>
                <li>Idioma: Español</li>
              </ul>
            </div>
            <div className="flex flex-row-reverse items-center pr-4">
              <div className="grid grid-cols-2 bg-white  rounded-lg p-5 m-2">
                <div className="col-span-2 mx-auto pb-1">Favoriteado</div>
                <div className="mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </div>
                <div>34.2k</div>
              </div>
              <div className="grid grid-cols-2 bg-white rounded-lg p-5 m-2">
                <div className="col-span-2 mx-auto pb-1">Calificación</div>
                <div className="mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </div>
                <div>4.5</div>
              </div>
              <div className="grid grid-cols-2 bg-white rounded-lg p-5 m-2">
                <div className="col-span-2 mx-auto pb-1">Alumnos</div>
                <div className="mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>
                </div>
                <div>45.8k</div>
              </div>
            </div>
            <div className="p-5">
              <div className=" flex flex-col bg-white rounded-lg justify-content">
                <div className="text-2xl pl-6 pt-5">Lo que aprenderás</div>
                <div className="text-md text-gray-400 p-8">
                  <li>Usar las diferentes herramientas de dibujo de Illustrator</li>
                  <li>Crear y formatear texto</li>
                  <li>Exportar gráficos para web</li>
                  <li>
                    Preparar los archivos de Illustrator para impresión comercia
                  </li>
                  <li>Vectorizar imágenes y ajustar los vectores resultante</li>
                  <li>
                    Aplicar transformaciones avanzadas con opciones y herramientas
                    de distorsión
                  </li>
                  <li>
                    Aplicar efectos dinámicos no destructivos con resultados
                    sorprendentes
                  </li>
                  <li>
                    Dar vida a los gráficos e ilustraciones usando símbolos, motivos
                    y pinceles
                  </li>
                  <li>Trabajar con efectos 3D</li>
                </div>
              </div>
            </div>
            <div className="p-5">
              <div className=" flex flex-col bg-white rounded-lg justify-content">
                <div className="text-2xl pl-6 pt-5">¿Para quién es este curso?</div>
                <div className="text-md text-gray-400 p-8">
                  <li>Diseñadores gráficos</li>
                  <li>Diseñadores web</li>
                  <li>Diseñadores UX/UI</li>
                  <li>Desarrolladores Frontend</li>
                  <li>
                    Personas sin conocimientos previos de Illustrator o con
                    conocimientos básicos
                  </li>
                  <li>
                    Personas que quieran fundamentar claramente sus conocimientos
                    previos de Illustrator
                  </li>
                  <li>
                    Cualquier persona que desee aprender a crear gráficos
                    vectoriales para web, impresos, video, etc.
                  </li>
                  <li>
                    Cualquier persona que quiera dominar las herramientas y opciones
                    de Illustrator desde sus conceptos fundamentales hasta los
                    avanzados
                  </li>
                </div>
              </div>
            </div>

            <div className="col-span-2 pl-6 pr-4">
              <div className="bg-white rounded-lg justify-content p-4 ">
                <div className="text-2xl pb-4 ">Descripción</div>
                <div className="text-md text-gray-400">
                  Al finalizar este curso, estarás en capacidad de crear
                  profesionalmente gráficos vectoriales y realizar tareas avanzadas.
                  Conocerás cómo realizar el proceso de exportación a diversos
                  formatos así como a preparar archivos para el proceso de impresión
                  comercial. Aprenderás también a realizar dibujo técnico preciso
                  con la herramienta Pluma, vectorizar imágenes, usar aspectos
                  avanzados del trabajo con Color, aplicar transformaciones
                  avanzadas con herramientas de Deformación, generar apariencias
                  orgánicas y realistas mediante el uso de Motivos, Pinceles,
                  Símbolos y Objetos de Malla, crear efectos 3D, y muchas técnicas
                  más.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="py-8 my-8"></div>
            <div className="bg-white rounded-md px-5 pt-5 mr-4 my-4">
              <div>
                <Image src="/images/ilustrator.png" width={1500} height={800} />
              </div>
              <div className="pb-2 pt-6">
                <strong className="text-4xl">69,90 S/</strong>
                <div className="inline-block text-gray-400">
                  <p className="line-through">299,99 S/</p>
                </div>
              </div>
              <div>
                <p className="p-1">77% de descuento</p>
              </div>
              <div>
                <p className="text-blue-500 p-1">
                  {' '}
                  <strong>Esta oferta termina en 7 horas</strong>
                </p>
              </div>
              <div className="py-4 my-4">
                <button className="block w-full py-3 px-4 bg-blue-500 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                  Agregar a la cesta
                </button>
              </div>
              <div>
                <strong className="text-lg">Este curso incluye:</strong>
              </div>
              <div className=" text-gray-400">
                <div className="flex py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="pl-2 inline-block">35 horas de video</p>
                </div>
                <div className="flex py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                  <p className="pl-2 inline-block">1 artículo</p>
                </div>
                <div className="flex py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                  <p className="pl-2 inline-block">3 recursos descargables</p>
                </div>
                <div className="flex py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                  <p className="pl-2 inline-block">Acceso de por vida</p>
                </div>
                <div className="flex py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                  </svg>

                  <p className="pl-2 inline-block">Certificado de finalización</p>
                </div>
              </div>
            </div>

            <div className="pt-3 pr-4">
              <button className="block w-full py-6 px-4 bg-white font-semibold rounded-xl shadow-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75">
                <p className="text-gray-400">Buscar cursos similares</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}