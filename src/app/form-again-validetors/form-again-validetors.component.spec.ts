import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAgainValidetorsComponent } from './form-again-validetors.component';

describe('FormAgainValidetorsComponent', () => {
  let component: FormAgainValidetorsComponent;
  let fixture: ComponentFixture<FormAgainValidetorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAgainValidetorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAgainValidetorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
