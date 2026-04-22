import {z} from 'zod'


/**Projects */
export const projectSchema = z.object({
    _id: z.string(), 
    project_name: z.string(), 
    client_name: z.string(), 
    description: z.string()
})

export type Project = z.infer<typeof projectSchema>
export type ProjectFormData = Pick<Project, 'client_name' | 'project_name' | 'description'>