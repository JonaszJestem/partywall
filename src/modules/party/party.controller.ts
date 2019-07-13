import { Controller, Get } from '@nestjs/common';
import { PartyService } from './party.service';

@Controller()
export class PartyController {
  constructor(private readonly partyService: PartyService) {
  }

  @Get()
  getParty(): string {
    return '';
  }
}
