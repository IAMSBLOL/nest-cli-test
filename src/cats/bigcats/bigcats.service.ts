import { Injectable } from '@nestjs/common';

@Injectable()
export class BigCatsService {
    getHello(): any {
        return {
            a:'I AM IRON BIG MAN...66'
        }
    }
}
