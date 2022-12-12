import { ThemeProvider } from "next-themes";
import Head from "next/head";
import Favorite from "../../components/Favorite";
import Navbar from "../../components/navbar";
import ProductItems from "../../components/ProductItems";
import SearchBar from "../../components/Searchbar";
import data from "../../utils/data";
import popularesdata from "../../utils/popularesdata";



export default function Inicio() {
  return (
    <div>
    <Head>
      <title>Ayuda| Inicio</title>
      </Head>

      <ThemeProvider enableSystem={true} attribute="class">
      <Navbar/>
      <SearchBar/>
      <div className='py-10 pl-72 font-bold text-4xl pt-1000'>Categorias</div>
        <div className="pl-72 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {data.categorias.map((categoria) =>(
                <ProductItems categoria={categoria} key={categoria.slug}></ProductItems>
              ))}
        </div>
        <div className='py-10 pl-72 font-bold text-4xl pt-1000'>Favoritos</div>
        <div className="pl-72 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {popularesdata.cursos.map((popular) =>(
                <Favorite popular={popular} key={popular.slug}></Favorite>
              ))}
        </div>

        </ThemeProvider>
      </div>
      
  )
  
}
