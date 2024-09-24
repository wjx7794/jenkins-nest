import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  // GET => http://localhost:3000/cats
  @Get()
  // 路由与处理函数命名无关
  findAll(): string {
    console.log('🍎 =>', '请求 cats');
    return 'This action returns all cats';
  }
}
