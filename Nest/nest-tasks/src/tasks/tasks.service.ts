import { Injectable } from '@nestjs/common';
import { Task } from './tasks.interface';
import { CreateTaskDto } from './dto/create.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: 0,
      title: 'Upload',
      description: 'Lorem Ipsum',
      estimatedTime: 15,
      createdBy: 'John Doe',
    },
    {
      id: 1,
      title: 'Save',
      description: 'Lorem Ipsum',
      estimatedTime: 8,
      createdBy: 'Will Smith',
    },
  ];

  getAll(): Task[] {
    return this.tasks;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const task: Task = {
      id: this.tasks.length,
      title: createTaskDto.title,
      description: createTaskDto.description,
      estimatedTime: createTaskDto.estimatedTime,
      createdBy: createTaskDto.createdBy,
    };

    this.tasks.push(task);

    return task;
  }

  updateTask(_id: number, taskDto: CreateTaskDto) {
    this.tasks = this.tasks.map((task) => {
      if (_id === task.id) {
        task.title = taskDto.title;
        task.description = taskDto.description;
        task.estimatedTime = taskDto.estimatedTime;
        task.createdBy = taskDto.createdBy;
      }
      return task;
    });
    return this.tasks;
  }
}
