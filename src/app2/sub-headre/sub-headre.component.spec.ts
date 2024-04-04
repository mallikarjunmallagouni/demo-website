import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHeadreComponent } from './sub-headre.component';

describe('SubHeadreComponent', () => {
  let component: SubHeadreComponent;
  let fixture: ComponentFixture<SubHeadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubHeadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubHeadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
