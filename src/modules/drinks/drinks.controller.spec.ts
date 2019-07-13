import { Test, TestingModule } from '@nestjs/testing';
import { DrinksController } from './drinks.controller';
import { DrinksService } from './drinks.service';

describe('Drinks controller', () => {
  let drinksController: DrinksController;

  beforeEach(async () => {
    const drinks: TestingModule = await Test.createTestingModule({
      controllers: [DrinksController],
      providers: [DrinksService],
    }).compile();

    drinksController = drinks.get<DrinksController>(DrinksController);
  });

  describe('root', () => {
    it('should return drinks', () => {
      expect(drinksController.getDrinks()).toBe([]);
    });
  });
});
