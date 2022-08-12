import { TasksService } from './tasks.service';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
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
    updateUser(taskId: number, title: any): any;
}
