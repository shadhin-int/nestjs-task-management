import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TaksController } from './taks/taks.controller';

@Module({
  imports: [TasksModule],
  controllers: [TaksController],
})
export class AppModule {}
