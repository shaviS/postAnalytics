import { Test, TestingModule } from '@nestjs/testing';
import { PostAnalyticsControllerController } from './post-analytics-controller.controller';

describe('PostAnalyticsControllerController', () => {
  let controller: PostAnalyticsControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostAnalyticsControllerController],
    }).compile();

    controller = module.get<PostAnalyticsControllerController>(PostAnalyticsControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
