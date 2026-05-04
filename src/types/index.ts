import {z} from 'zod'

/**Tasks */
export const taskStatusSchema = z.enum(["pending", "on_hold", "in_progress", "under_review", "complete"])
export type TaskStatus = z.infer<typeof taskStatusSchema>

export const taskSchema = z.object({
    _id: z.string(), 
    name: z.string(), 
    description: z.string(), 
    project: z.string(), 
    status: taskStatusSchema,
    createdAt: z.string(), 
    updatedAt: z.string()
})

export type Task = z.infer<typeof taskSchema>
export type TaskFormData = Pick<Task, 'name' | 'description'>

/**Projects */
export const projectSchema = z.object({
    _id: z.string(), 
    project_name: z.string(), 
    client_name: z.string(), 
    description: z.string()
})

export const dashboardProjectSchema = z.array(
    projectSchema.pick({
        _id: true,
        project_name: true,
        client_name:true,
        description: true
    })
)

export type Project = z.infer<typeof projectSchema>
export type ProjectFormData = Pick<Project, 'client_name' | 'project_name' | 'description'>