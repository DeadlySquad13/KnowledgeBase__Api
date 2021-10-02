import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

class User {
  name: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUser(): string {
    return this.appService.getUser();
  }

  @Post()
  createUser(@Body() user: User): string {
    return this.appService.createUser(user.name);
  }
}
