import { ThemeProvider } from "next-themes";
import Head from "next/head";
import Courses from "../../components/Courses";
import Navbar from "../../components/navbar";
import SearchBar from "../../components/Searchbar";
import popularesdata from "../../utils/popularesdata";




export default function VerCursos() {
  return (
    <div>
    <Head>
      <title>Ayuda| VerCursos</title>
      </Head>
      <ThemeProvider enableSystem={true} attribute="class">
      <Navbar/>
      <SearchBar/>
        <div className='py-10 pl-72 font-bold text-4xl pt-1000 '>Cursos</div>
          <div >
            <div class="pl-72 flex space-x-4  m-auto">
              <div className="group cursor-pointer">
                <h3 className="flex mb-2 justify-start items-center gap-4 pl-5  p-2 pr-5 group-hover:underline underline-offset-8 decoration-blue-500 decoration-4">Todos</h3>
              </div>
              <div className="group cursor-pointer">
                <h3 className="flex mb-2 justify-start items-center gap-4 pl-5  p-2 pr-5 group-hover:underline underline-offset-8 decoration-blue-500 decoration-4">Activos</h3>
              </div>
              <div className="group cursor-pointer">
                <h3 className="flex mb-2 justify-start items-center gap-4 pl-5  p-2 pr-5 group-hover:underline underline-offset-8 decoration-blue-500 decoration-4">Completados</h3>
              </div>
            </div>
          </div>
        <div className="pl-72 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {popularesdata.cursos.map((popular) =>(
                <Courses popular={popular} key={popular.slug}></Courses>
              ))}
        </div>
        </ThemeProvider>
      </div>
      
  )
  
}