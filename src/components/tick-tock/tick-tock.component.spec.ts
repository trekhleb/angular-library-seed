import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { TickTockModule } from '../../';
import { TickTockComponent } from './tick-tock.component';

describe('TickTockComponent', () => {
  const timeStringFormat = /[0-9]{2}:[0-9]{2}:[0-9]{2}/i;
  let componentFixture: ComponentFixture<TickTockComponent>;
  let componentInstance: TickTockComponent;

  // Asynchronous beforeEach.
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [ TickTockModule ]
      }).compileComponents().then(() => { /* Don't do anything */ });
    })
  );

  // Synchronous BeforeEach.
  beforeEach(() => {
    componentFixture = TestBed.createComponent(TickTockComponent);
    componentInstance = componentFixture.componentInstance;
  });

  it('should display time string', (done) => {
    componentFixture.detectChanges();

    setInterval(() => {
      componentFixture.detectChanges();

      const tickTockPageElement = componentFixture.debugElement.queryAll(By.css('.tick-tock-time'));
      const displayedTimeText = tickTockPageElement[0].nativeElement.innerText;

      expect(tickTockPageElement).toBeDefined();
      expect(tickTockPageElement.length).toEqual(1);
      expect(displayedTimeText.length).toEqual(8);
      expect(timeStringFormat.test(displayedTimeText)).toBeTruthy();

      done();
    }, 1000);
  });
});
