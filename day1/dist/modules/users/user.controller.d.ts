import { UserService } from "./user.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAll(): {
        id: number;
        userName: string;
        password: string;
    }[];
    getById(userId: number): {
        user: {
            id: number;
            userName: string;
            password: string;
        };
        task: {
            id: number;
            title: string;
            userId: number;
            statusId: number;
        }[];
    };
    addOne(user: any): {
        id: number;
        userName: string;
        password: string;
    }[];
    deleteOne(userId: number): any;
    updateUser(userId: number, userName: any): any;
}
