import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('🥒 =>', '请求 /');
    return 'Hello World!';
  }
}
