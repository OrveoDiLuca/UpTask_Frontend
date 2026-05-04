import { isAxiosError } from 'axios'
import api from '@/lib/axios'
import { taskSchema, type Project, type Task, type TaskFormData } from '@/types'

type TaskAPI = {
    formData: TaskFormData
    projectId: Project['_id']
    editTaskId: Task['_id']
    status: Task['status']
}

export async function createTask({formData, projectId}: Pick<TaskAPI, 'formData' | 'projectId'>) {
    try {
        const url = `/projects/${projectId}/tasks`
        const {data} = await api.post<string>(url,formData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function getTaskById({projectId, editTaskId}: Pick<TaskAPI, 'projectId' | 'editTaskId'>) {
    try {
        const url = `/projects/${projectId}/tasks/${editTaskId}`
        const {data} = await api(url)
        const response = taskSchema.safeParse(data)
        if(response.success){
            return response.data
        }
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function updateTask({projectId,editTaskId, formData}: Pick<TaskAPI, 'projectId' | 'editTaskId' | 'formData'>) {
    try {
        const url = `/projects/${projectId}/tasks/${editTaskId}`
        const {data} = await api.put<string>(url, formData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function deleteTask({projectId, editTaskId}: Pick<TaskAPI, 'projectId' | 'editTaskId'>) {
    try {
        const url = `/projects/${projectId}/tasks/${editTaskId}`
        const {data} = await api.delete<string>(url)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function updateTaskStatus({projectId, editTaskId, status}: Pick<TaskAPI, 'projectId' | 'editTaskId' | 'status'>) {
    try {
        const url = `/projects/${projectId}/tasks/${editTaskId}/status`
        const {data} = await api.patch<string>(url, {status})
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}