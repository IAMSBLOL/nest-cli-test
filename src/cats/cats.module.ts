import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { BigCatsModule } from './bigcats'

@Module({
    controllers: [CatsController],
    providers: [CatsService],
    imports:[BigCatsModule],
    exports: [CatsService]
})
export class CatsModule {}