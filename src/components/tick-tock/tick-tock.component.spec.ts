import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { NgLibraryStarterModule } from '../../';
import { GreeterComponent } from './tick-tock.component';

describe('NowMomentComponent', () => {
  let componentFixture: ComponentFixture<GreeterComponent>;
  let componentInstance: GreeterComponent;
  let componentDebugElement: DebugElement;

  // Asynchronous beforeEach.
  beforeEach(
    async(
      () => {
        TestBed.configureTestingModule({
          imports: [ NgLibraryStarterModule ],
        }).compileComponents().then(
          () => { /* Don't do anything yet */ }
        );
      }
    )
  );

  // Synchronous beforeEach.
  beforeEach(() => {
    componentFixture = TestBed.createComponent(GreeterComponent);
    componentInstance = componentFixture.componentInstance;
    componentDebugElement = componentFixture.debugElement;
  });

  it('should display greetings', async(() => {
    componentInstance.name = 'Johny';
    componentFixture.detectChanges();

    let greetingElement = componentDebugElement.queryAll(
      By.css('.greeting-notification')
    );

    expect(greetingElement).not.toBeNull(
      'Greeting element should be rendered'
    );

    expect(greetingElement.length).toEqual(
      1,
      'There should be exactly one greeting element'
    );

    expect(componentInstance.greetingString).toEqual(
      'Hello Johny'
    );
  }));
});
