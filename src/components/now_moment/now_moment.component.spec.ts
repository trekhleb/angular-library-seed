import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { NgLibraryStarterModule } from '../../ng_library_starter.module';
import { NowMomentComponent } from './now_moment.component';

describe('NowMomentComponent', () => {
  let componentFixture: ComponentFixture<NowMomentComponent>;
  let componentInstance: NowMomentComponent;
  let componentDebugElement: DebugElement;

  // Asynchronous beforeEach.
  beforeEach(
    async(
      () => {
        TestBed.configureTestingModule({
          imports: [ NgLibraryStarterModule ],
        }).compileComponents().then(
          () => { /* Don't do anything yet */
          }
        );
      }
    )
  );

  // Synchronous beforeEach.
  beforeEach(() => {
    componentFixture = TestBed.createComponent(NowMomentComponent);
    componentInstance = componentFixture.componentInstance;
    componentDebugElement = componentFixture.debugElement;
  });

  it('should display current date', async(() => {
    componentFixture.detectChanges();

    let nowComponentWrapperElement = componentDebugElement.queryAll(
      By.css('.now-moment-wrapper')
    );

    let nowComponentDateElement = componentDebugElement.queryAll(
      By.css('.now-moment-wrapper .now-moment-date')
    );

    expect(nowComponentWrapperElement).not.toBeNull(
      'Date wrapper element should be rendered'
    );

    expect(nowComponentWrapperElement.length).toEqual(
      1,
      'There should be exactly one date wrapper element'
    );

    expect(nowComponentDateElement).not.toBeNull(
      'Date element should be rendered'
    );

    expect(nowComponentDateElement.length).toEqual(
      1,
      'There should be exactly one date element'
    );

    expect(componentInstance.now).toBeDefined(
      'Component now property should be defined'
    );
  }));
});
