export declare class TasksService {
    getAll(): {
        id: number;
        title: string;
        userId: number;
        statusId: number;
    }[];
    getById(taskId: number): {
        id: number;
        title: string;
        userId: number;
        statusId: number;
    };
    addOne(task: any): {
        id: number;
        title: string;
        userId: number;
        statusId: number;
    }[];
    deleteOne(taskId: number): any;
    updatetask(taskId: number, title: string): any;
    findUserTasks(userId: number): {
        id: number;
        title: string;
        userId: number;
        statusId: number;
    }[];
}
