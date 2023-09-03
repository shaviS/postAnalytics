import { Module } from '@nestjs/common';
import { PostAnalyticsService } from './service/postAnalytics/post-analytics.service';
import { PostAnalyticsControllerController } from './controller/post-analytics-controller/post-analytics-controller.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostAnalytics } from './entity/post-analytics.entity/post-analytics.entity';
import { Post } from './entity/post.entity/post.entity';

@Module({
  providers: [PostAnalyticsService],
  controllers: [PostAnalyticsControllerController],
  imports: [TypeOrmModule.forFeature([PostAnalytics, Post ])],
})
export class PostAnalyticsModule {}
