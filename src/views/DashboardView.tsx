import { Link } from "react-router-dom"
import {useQuery} from '@tanstack/react-query'
import { getProjects } from "@/api/ProjectApi"

export default function DashboardView() {
  const {data,isError,isLoading} = useQuery({
    queryKey: ['projects'], 
    queryFn: getProjects
  })

  if(data) return (
    <>
      <h1 className="text-5xl font-black">Mis proyectos</h1>
      <p className="text-2xl font-light text-gray-500 mt-5">Maneja y administra tus proyectos</p>

      <nav className="my-5">
        <Link 
        className="bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
        to='/projects/create'
        >Nuevo proyecto</Link>
      </nav>
      
      {data.length ? (
        <p></p>
      ) : (
        <p className="text-center py-20 ">Agrega proyectos para poder visualizarlos. {''}
          <Link
            className="text-fuchsia-500 font-bold"
            to='/projects/create'
          >
            Crear Proyecto
          </Link>
        </p>
      )}

    </>
  )
}
