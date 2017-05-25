import { TickTockService } from './tick-tock.service';

describe('TickTockService', () => {
  let tickTockService: TickTockService;

  beforeEach(() => {
    tickTockService = new TickTockService();
  });

  it('should return observable with time string', (done) => {
    const timeStringFormat = /[0-9]{2}:[0-9]{2}:[0-9]{2}/i;

    tickTockService.getTick().subscribe(
      (timeString) => {
        expect(timeStringFormat.test(timeString)).toBeTruthy(
          'Time string should have hh:mm:ss format'
        );

        // Stop asynchronous test.
        done();
      }
    );
  });
});
