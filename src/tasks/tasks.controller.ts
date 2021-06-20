import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Patch,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Tasks, TaskStatus } from './tasks.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getTask(@Query() filterDto: GetTasksFilterDto): Tasks[] {
    if (Object.keys(filterDto).length) {
      // console.log(filterDto);
      return this.taskService.getTaskWithFilter(filterDto);
    } else {
      return this.taskService.getAllTasks();
    }
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string) {
    return this.taskService.getTaskById(id);
  }

  @UsePipes(ValidationPipe)
  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.creatTask(createTaskDto);
  }

  @Delete('/:id')
  deleteTaskById(@Param('id') id: string) {
    return this.taskService.deleteTaskById(id);
  }
  @Patch('/:id/status')
  updateTask(@Param('id') id: string, @Body('status') status: TaskStatus) {
    return this.taskService.updateTask(id, status);
  }
}
