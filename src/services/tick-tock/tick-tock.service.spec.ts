import { TickTockService } from './tick-tock.service';

describe('TickTockService', () => {
  let tickTockService: TickTockService;

  beforeEach(() => {
    tickTockService = new TickTockService();
  });

  it('should return observable with current time string', (done) => {
    tickTockService.getTick().subscribe(
      (timeString) => {
        expect(timeString.length).toEqual(8);
        done();
      }
    );
  });
});
