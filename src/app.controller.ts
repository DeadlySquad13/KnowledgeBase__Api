import { Body, Controller, Get, Patch } from '@nestjs/common';
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

  @Patch()
  createUser(@Body() user: User): string {
    return this.appService.createUser(user.name);
  }
}
