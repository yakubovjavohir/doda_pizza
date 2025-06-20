import { Test, TestingModule } from '@nestjs/testing';
import { TTController } from './t-t.controller';
import { TTService } from './t-t.service';

describe('TTController', () => {
  let controller: TTController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TTController],
      providers: [TTService],
    }).compile();

    controller = module.get<TTController>(TTController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
