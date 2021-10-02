import { Controller, Get, Post } from '@nestjs/common';

@Controller('tiddlers')
export class TiddlersController {
  @Post()
  add(): string {
    return 'Add tiddler';
  }
  @Get()
  findAll(): string {
    return 'Return all tiddlers';
  }
}
