import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheWoodComponent } from './the-wood.component';

describe('TheWoodComponent', () => {
  let component: TheWoodComponent;
  let fixture: ComponentFixture<TheWoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheWoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheWoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
