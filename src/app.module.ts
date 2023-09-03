import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostAnalyticsModule } from './post-analytics/post-analytics.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    PostAnalyticsModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'post_analytics.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
