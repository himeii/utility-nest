import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { TasksModule } from './tasks/tasks.module';
import { SprintsModule } from './sprints/sprints.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users.entity';

@Module({
  imports: [
    UsersModule,
    ProjectsModule,
    TasksModule,
    SprintsModule,
    TypeOrmModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
