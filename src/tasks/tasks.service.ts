import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = { task: 'There is no task' };

  getAllTasks() {
    return this.tasks;
  }
}
