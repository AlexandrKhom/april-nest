import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log(process.env.MONGO_LOGIN);
    console.log(typeof process.env.MONGO_PORT);
    return this.appService.getHello();
  }
}
