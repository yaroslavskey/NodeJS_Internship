import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './tasks.interface';
import { CreateTaskDto } from './dto/create.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  get(): Task[] {
    return this.taskService.getAll();
  }

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createTaskDto: CreateTaskDto): Task {
    return this.taskService.createTask(createTaskDto);
  }

  @Patch('/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() taskDto: CreateTaskDto,
  ) {
    return this.taskService.updateTask(id, taskDto);
  }
}
