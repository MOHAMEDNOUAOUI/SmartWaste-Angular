export enum Role {
    ROLE_ADMIN = "ROLE_ADMIN",
    ROLE_USER = "ROLE_USER",
    ROLE_WORKER = "ROLE_WORKER"
}
export enum TaskStatut {
    To_DO = 'To_DO',
    In_Progress = 'In_Progress',
    Completed = 'Completed',
    Failed = 'Failed',
    Cancelled = 'Cancelled',
}

export enum TaskType {
    CLEANUP = 'CLEANUP',
    MAINTENANCE = 'MAINTENANCE'
}

export enum StatusComplaint {
    PENDING = 'PENDING',
    IN_PROGRESS ='IN_PROGRESS',
    RESOLVED = 'RESOLVED',
    CLOSED = 'CLOSED'
}