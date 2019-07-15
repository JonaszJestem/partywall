import { Test } from '@nestjs/testing';
import { DrinksService } from './drinks.service';
import { Drink } from '../../interfaces/Drink';
import { User, Username } from '../../interfaces/User';
import { getModelToken } from '@nestjs/mongoose';
import { DrinksModule } from './drinks.module';

describe('Drinks controller', () => {
  let drinksService: DrinksService;

  const expectedDrinks = [
    {
      username: 'someUser',
      drinks: [
        { name: 'drink', volume: 123, price: 1, quantity: 2 } as Drink,
      ],
    },
  ] as [Username & { drinks: [Drink]; }];

  beforeEach(async () => {
    const drinks = await createTestModule();
    drinksService = drinks.get<DrinksService>(DrinksService);
  });

  describe('getDrinks', () => {
    it('returns the drinks', async () => {
      await expect(drinksService.getDrinks()).resolves.toBe(expectedDrinks);
    });
  });

  async function createTestModule() {
    return await Test.createTestingModule({
      imports: [DrinksModule],
    }).overrideProvider(getModelToken('User'))
      .useValue(mockModel)
      .compile();
  }

  const mockModel = {
    find: () => expectedDrinks,
  };
});
