import { Injectable } from '@nestjs/common';
import { Tasks, TaskStatus } from './tasks.model';
import { v4 as uuid4 } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Tasks[] = [];

  getAllTasks(): Tasks[] {
    return this.tasks;
  }
  creatTask(creatTaskDto: CreateTaskDto): Tasks {
    const { title, description } = creatTaskDto;

    const task: Tasks = {
      id: uuid4(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }
}
