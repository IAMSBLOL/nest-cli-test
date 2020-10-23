import { Module } from '@nestjs/common';
import { CatsController } from './bigcats.controller';
import { BigCatsService } from './bigcats.service';

@Module({
    controllers: [CatsController],
    providers: [BigCatsService],
})
export class BigCatsModule {}