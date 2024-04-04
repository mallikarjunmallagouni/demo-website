import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App5Component } from './app5.component';

describe('App5Component', () => {
  let component: App5Component;
  let fixture: ComponentFixture<App5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ App5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(App5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
