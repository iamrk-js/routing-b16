
export interface Iuser{
    userName: string;
    userId: string;
    userRole: UserRole;
}


type UserRole = "Candidate" | "Admin" | "Supar-Admin"