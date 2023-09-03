import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostAnalytics } from 'src/post-analytics/entity/post-analytics.entity/post-analytics.entity';
import { Post as PostEntity } from 'src/post-analytics/entity/post.entity/post.entity';
import { PostAnalyticsService } from 'src/post-analytics/service/postAnalytics/post-analytics.service';

@Controller('/api/v1/posts/')
export class PostAnalyticsControllerController {
  constructor(private postAnalyticsService: PostAnalyticsService) {}

  @Post()
  async createPost(@Body() post: PostEntity) {
    return this.postAnalyticsService.insertPost(post.id, post.text);
  }

  @Get(':postId/analytics')
  async getPostAnalytics(
    @Param('postId') postId: number,
  ): Promise<PostAnalytics> {
    return this.postAnalyticsService.getPostAnalytics(postId);
  }
}
