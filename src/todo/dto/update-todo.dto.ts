import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';

export class UpdateTodoDto {
  title?: string;
  description?: string;
  completed?: boolean;
}
