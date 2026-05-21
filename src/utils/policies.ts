import type { Project, TeamMember } from "@/types";


export const isManager = (manager: Project['manager'], userId: TeamMember['_id']) => {
    return manager === userId 
}