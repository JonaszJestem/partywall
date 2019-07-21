/*
import { INestApplication } from '@nestjs/common';
import { DrinksModule, DrinksService } from '../../src/modules/drinks';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { getModelToken } from '@nestjs/mongoose';
import { Drink } from '../../src/interfaces/Drink';
import { Username } from '../../src/interfaces/User';
import { AuthService } from '../../src/modules/auth/auth.service';

describe('Drinks', () => {
  const drinksService = { findAll: () => ['test'] };

  let app: INestApplication;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [DrinksModule],
    })
      .overrideProvider(DrinksService)
      .useValue(drinksService)
      .overrideProvider(getModelToken('User'))
      .useValue(mockModel)
      .overrideProvider(AuthService)
      .useValue(mockAuth)
      .compile();

    app = module.createNestApplication();
    await app.init();
  });

  it(`/GET drinks`, () => {
    return request(app.getHttpServer())
      .get('/drinks')
      .expect(200)
      .expect({
        data: drinksService.findAll(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});

const mockModel = {
  find: () => expectedDrinks,
};

const expectedDrinks = [
  {
    username: 'someUser',
    drinks: [
      { name: 'drink', volume: 123, price: 1, quantity: 2 } as Drink,
    ],
  },
] as [Username & { drinks: [Drink]; }];

const mockAuth = {
  login: () => undefined,
  register: () => undefined,
  validate: () => undefined,
}
*/
