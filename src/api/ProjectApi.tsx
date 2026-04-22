import api from "@/lib/axios";
import type { ProjectFormData } from "@/types";
import { isAxiosError } from "axios";

//Se crea este archivo para centralizar todos los llamados de la API en un solo archivo. 
export async function createProject(formData: ProjectFormData){
    try {
        const {data} = await api.post('/projects', formData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
        
    }
}