import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAgainComponent } from './form-again.component';

describe('FormAgainComponent', () => {
  let component: FormAgainComponent;
  let fixture: ComponentFixture<FormAgainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAgainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAgainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
