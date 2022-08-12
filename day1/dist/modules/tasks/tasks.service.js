"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const data = require("../../data/data.json");
let tasks;
let TasksService = class TasksService {
    getAll() {
        return data.tasks;
    }
    getById(taskId) {
        return data.tasks.find(task => task.id === taskId);
    }
    addOne(task) {
        data.tasks.push(task);
        return data.tasks;
    }
    deleteOne(taskId) {
        tasks = data.tasks.filter(task => task.id !== taskId);
        return tasks;
    }
    updatetask(taskId, title) {
        tasks = data.tasks.map(task => {
            if (task.id === taskId) {
                task.title = title;
            }
            return task;
        });
        return tasks;
    }
    findUserTasks(userId) {
        return data.tasks.filter(task => task.userId === userId);
    }
};
TasksService = __decorate([
    (0, common_1.Injectable)()
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map