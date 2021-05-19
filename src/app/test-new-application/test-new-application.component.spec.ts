import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNewApplicationComponent } from './test-new-application.component';

describe('TestNewApplicationComponent', () => {
  let component: TestNewApplicationComponent;
  let fixture: ComponentFixture<TestNewApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestNewApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNewApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
