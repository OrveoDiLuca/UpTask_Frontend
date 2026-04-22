import api from "@/lib/axios";
import { dashboardProjectSchema, type ProjectFormData } from "@/types";
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


export async function getProjects(){
    try {
        const {data} = await api.get('/projects')
        const response = dashboardProjectSchema.safeParse(data)
        if(response.success){
            return response.data
        }
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
        
    }
}