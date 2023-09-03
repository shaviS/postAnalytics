import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '../../entity/post.entity/post.entity';
import { Repository } from 'typeorm';
import { PostAnalytics } from '../../entity/post-analytics.entity/post-analytics.entity';

@Injectable()
export class PostAnalyticsService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
    @InjectRepository(PostAnalytics)
    private postAnalyticsRepository: Repository<PostAnalytics>,
  ) {}

  async createPostAnalytics(postId: number, text: string) {
    const postAnalytics = new PostAnalytics();
    postAnalytics.id = postId;
    postAnalytics.numberOfWords = text.split(' ').length;
    postAnalytics.averageWordLength =
      text.split(' ').reduce((acc, curr) => acc + curr.length, 0) /
      postAnalytics.numberOfWords;
    return this.postAnalyticsRepository.save(postAnalytics);
  }

  async createPost(postId: number, text: string) {
    const post = new Post();
    post.text = text;
    post.id = postId;
    return this.postRepository.save(post);
  }

  async getPostAnalytics(postId: number) {
    return this.postAnalyticsRepository.findOne({ where: { id: postId } });
  }

  async insertPost(postId: number, text: string) {
    await this.createPost(postId, text);
    return this.createPostAnalytics(postId, text);
  }
}
