import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnyQuestionsComponent } from './any-questions.component';

describe('AnyQuestionsComponent', () => {
  let component: AnyQuestionsComponent;
  let fixture: ComponentFixture<AnyQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnyQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnyQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
