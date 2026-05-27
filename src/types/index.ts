import {z} from 'zod'


/**Auth User */
const authSchema = z.object({
    name: z.string(), 
    email: z.string().email(),
    password: z.string(),
    current_password: z.string(), 
    confirmPassword: z.string(),
    token: z.string()
})

type Auth = z.infer<typeof authSchema>
export type UserLoginForm = Pick<Auth, 'email' | 'password'>
export type UserRegisterForm = Pick<Auth, 'name' | 'email' | 'password' | 'confirmPassword'>
export type RequestConfirmationCodeForm = Pick<Auth, 'email'>
export type ForgotPasswordForm = Pick<Auth, 'email'>
export type NewPasswordForm = Pick<Auth, 'password' | 'confirmPassword'>
export type UpdateCurrentUserPasswordForm = Pick<Auth, 'current_password' | 'password' | 'confirmPassword'>
export type ConfirmToken = Pick<Auth, 'token'>
export type CheckPasswordForm = Pick<Auth, 'password'>

/**Users */

export const userSchema = authSchema.pick({
    name: true, 
    email: true
}).extend({
    _id: z.string(), 
})
export type User = z.infer<typeof userSchema>
export type UserProfileForm = Pick<User, 'name' | 'email'>

/**Notes*/
const noteSchema = z.object({
    _id: z.string(),
    content: z.string(), 
    createdBy: userSchema,
    task: z.string(),
    createdAt: z.string()
})

export type Note = z.infer<typeof noteSchema>
export type NoteFormData = Pick<Note, 'content'>

/**Tasks */
export const taskStatusSchema = z.enum(["pending", "on_hold", "in_progress", "under_review", "complete"])
export type TaskStatus = z.infer<typeof taskStatusSchema>

export const taskSchema = z.object({
    _id: z.string(), 
    name: z.string(), 
    description: z.string(), 
    project: z.string(), 
    status: taskStatusSchema,
    completedBy: z.array(z.object({
        _id: z.string(), 
        user: userSchema, 
        status: taskStatusSchema
    })),
    notes: z.array(noteSchema.extend({
        createdBy: userSchema
    })), 
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
    description: z.string(),
    manager: z.string()
})

export const dashboardProjectSchema = z.array(
    projectSchema.pick({
        _id: true,
        project_name: true,
        client_name:true,
        description: true,
        manager: true
    })
)

export type Project = z.infer<typeof projectSchema>
export type ProjectFormData = Pick<Project, 'client_name' | 'project_name' | 'description'>

/**Team */
const TeamMemberSchema = userSchema.pick({
    name: true, 
    email: true, 
    _id: true
})
export const TeamMembersSchema = z.array(TeamMemberSchema)
export type TeamMember = z.infer<typeof TeamMemberSchema>
export type TeamMemberForm = Pick<TeamMember, 'email'>