import { Controller,Get,Req,HttpCode } from '@nestjs/common';
import { CatsService } from './cats.service'
import { Request } from 'express';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService:CatsService){}
    @Get()
    @HttpCode(200)
    // @Redirect('https://nestjs.com', 301)
    findAll(@Req() request: Request) {
  
        return this.catsService.getHello()
    }


}