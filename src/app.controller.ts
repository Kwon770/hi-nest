import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // It is like get router of express
  // Decorator must be on function or class
  @Get('/hey')
  sayHey(): string {
    return this.appService.getHey();
  }
}
