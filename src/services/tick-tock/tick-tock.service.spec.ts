import { TickTockService } from './tick-tock.service';

describe('TickTockService', () => {
  let tickTockService: TickTockService;

  beforeEach(() => {
    tickTockService = new TickTockService();
  });

  it('should return current time', () => {
    expect(tickTockService.getTick('testFormat')).toEqual('Time');
  });
});
