import { Test, TestingModule } from '@nestjs/testing';
import { SprintsController } from './sprints.controller';

describe('Sprints Controller', () => {
  let controller: SprintsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SprintsController],
    }).compile();

    controller = module.get<SprintsController>(SprintsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
