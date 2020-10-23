import { Controller,Get,Req,HttpCode } from '@nestjs/common';
import { BigCatsService } from './bigcats.service'

import { Request } from 'express';

@Controller('bigcats')
export class CatsController {
    constructor(
        private readonly bigcatsService:BigCatsService,
  
    ){}
    @Get()
    @HttpCode(200)
    // @Redirect('https://nestjs.com', 301)
    findAll(@Req() request: Request) {
   
        return this.bigcatsService.getHello()
    }


}