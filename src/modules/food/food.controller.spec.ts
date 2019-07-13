import { Test, TestingModule } from '@nestjs/testing';
import { FoodController } from './food.controller';
import { FoodService } from './food.service';

describe('Food Controller', () => {
  let foodController: FoodController;

  beforeEach(async () => {
    const food: TestingModule = await Test.createTestingModule({
      controllers: [FoodController],
      providers: [FoodService],
    }).compile();

    foodController = food.get<FoodController>(FoodController);
  });

  describe('root', () => {
    it('should return food', () => {
      expect(foodController.getFood()).toBe([]);
    });
  });
});
