import api from "@/lib/axios";
import type { ProjectFormData } from "@/types";

//Se crea este archivo para centralizar todos los llamados de la API en un solo archivo. 
export async function createProject(formData: ProjectFormData){
    try {
        const {data} = await api.post('/projects', formData)
        console.log(data)
    } catch (error: any) {
        console.log('STATUS:', error?.response?.status)
        console.log('DATA:', error?.response?.data)
        console.log('MESSAGE:', error?.message)
    }
}