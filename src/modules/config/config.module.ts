import { Module } from '@nestjs/common';
import * as NestConfig from '@nestjs/config';
import { MongoConfig } from './mongo.config';
import { ConfigService } from './config.service';

@Module({
  imports: [
    NestConfig.ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
  ],
  providers: [NestConfig.ConfigService, MongoConfig, ConfigService],
  exports: [MongoConfig, ConfigService],
})
export class ConfigModule {}
