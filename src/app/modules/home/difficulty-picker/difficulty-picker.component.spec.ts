import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifficultyPickerComponent } from './difficulty-picker.component';

describe('DifficultyPickerComponent', () => {
  let component: DifficultyPickerComponent;
  let fixture: ComponentFixture<DifficultyPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DifficultyPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DifficultyPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
