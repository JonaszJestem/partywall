import { Test, TestingModule } from '@nestjs/testing';
import { PartyController } from './party.controller';
import { PartyService } from './party.service';

describe('Party Controller', () => {
  let partyController: PartyController;

  beforeEach(async () => {
    const party: TestingModule = await Test.createTestingModule({
      controllers: [PartyController],
      providers: [PartyService],
    }).compile();

    partyController = party.get<PartyController>(PartyController);
  });

  describe('root', () => {
    it('should return party', () => {
      expect(partyController.getParty()).toBe([]);
    });
  });
});
