import { INestApplication } from '@nestjs/common';
import { UserModule } from '../../src/modules/users/user.module';
import { User } from '../../src/interfaces/User';
import { getModelToken } from '@nestjs/mongoose';
import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { LoginModule } from '../../src/modules/login/login.module';

describe('User', () => {
  const USERS_ENDPOINT = '/users';
  let app: INestApplication;
  let httpServer;
  const userDTO = {
    username: 'username',
    password: 'password',
  };

  beforeAll(async () => {
    const module = await createTestModule();
    app = module.createNestApplication();
    await app.init();
    httpServer = app.getHttpServer();
  });

  it(`can register`, async () => {
    const registeredUser = await request(httpServer)
      .post(`${USERS_ENDPOINT}/register`)
      .send(userDTO)
      .expect(201);

    console.log(registeredUser);
  });

  it(`can log in`, async () => {
    const loggedIn = await request(httpServer)
      .post('/users/login')
      .send(userDTO)
      .expect(200);

    expect(loggedIn.body).toHaveProperty('accessToken');
    expect(loggedIn.body.username).toBe(userDTO.username);
  });

  afterAll(async () => {
    await app.close();
  });

  async function createTestModule() {
    return await Test.createTestingModule({
      imports: [UserModule, LoginModule],
    }).overrideProvider(getModelToken('User'))
      .useValue(UserMock)
      .compile();
  }
});

class UserMock {
  private static model: any;
  private static users: any[] = [];

  constructor(user) {
    UserMock.model = user;
  }

  static findOne({ username }) {
    const foundUser = UserMock.users.find(u => u.username === username);
    return foundUser;
  }

  save() {
    UserMock.users = [...UserMock.users, UserMock.model];
  }
}
