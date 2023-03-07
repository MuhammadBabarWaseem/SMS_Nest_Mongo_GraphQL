import { LessonResolver } from './lesson.resolver';
import { Module } from '@nestjs/common';

@Module({
  providers: [LessonResolver],
})
export class LessonModule {}
