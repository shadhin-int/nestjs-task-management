import { Injectable, NotFoundException } from '@nestjs/common';
import { Tasks, TaskStatus } from './tasks.model';
import { v4 as uuid4 } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
  private tasks: Tasks[] = [];

  getAllTasks(): Tasks[] {
    return this.tasks;
  }
  getTaskById(id: string): Tasks {
    const task = this.tasks.find((tasks) => tasks.id === id);
    if (!task) {
      throw new NotFoundException();
    } else {
      return task;
    }
  }

  getTaskWithFilter(filterDto: GetTasksFilterDto): Tasks[] {
    const { status, search } = filterDto;

    let tasks = this.getAllTasks();

    if (status) {
      tasks = tasks.filter((tasks) => tasks.status === status);
    }
    if (search) {
      tasks = tasks.filter(
        (tasks) =>
          tasks.title.includes(search) || tasks.description.includes(search),
      );
    }
    return tasks;
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
  deleteTaskById(id: string): void {
    this.tasks = this.tasks.filter((tasks) => tasks.id !== id);
  }
  updateTask(id: string, status: TaskStatus): Tasks {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }
}
