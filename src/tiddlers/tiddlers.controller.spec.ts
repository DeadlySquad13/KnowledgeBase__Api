import { Test, TestingModule } from '@nestjs/testing';
import { TiddlersController } from './tiddlers.controller';

describe('TiddlersController', () => {
  let controller: TiddlersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiddlersController],
    }).compile();

    controller = module.get<TiddlersController>(TiddlersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
