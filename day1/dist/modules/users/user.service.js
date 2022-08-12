"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const data = require("../../data/data.json");
const tasks_service_1 = require("../tasks/tasks.service");
let users;
let UserService = class UserService {
    constructor(tasksService) {
        this.tasksService = tasksService;
    }
    getAll() {
        return data.users;
    }
    getById(userId) {
        const user = data.users.find(user => user.id === userId);
        const task = this.tasksService.findUserTasks(userId);
        return { user, task };
    }
    addOne(user) {
        data.users.push(user);
        return data.users;
    }
    deleteOne(userId) {
        users = data.users.filter(user => user.id !== userId);
        return users;
    }
    updateUser(userId, userName) {
        users = data.users.map(user => {
            if (user.id === userId) {
                user.userName = userName.userName;
            }
            return user;
        });
        return users;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [tasks_service_1.TasksService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map