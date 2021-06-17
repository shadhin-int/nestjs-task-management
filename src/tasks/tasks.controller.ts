import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Tasks, TaskStatus } from './tasks.model';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTask(): Tasks[] {
    return this.taskService.getAllTasks();
  }

  @Post()
  createTask(
    @Body('title') title: string,
    @Body('description') description: string,
  ) {
    return this.taskService.creatTask(title, description);
  }
}
