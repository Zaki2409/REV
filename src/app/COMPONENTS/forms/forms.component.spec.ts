import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FORMSComponent } from './forms.component';

describe('FORMSComponent', () => {
  let component: FORMSComponent;
  let fixture: ComponentFixture<FORMSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FORMSComponent]
    });
    fixture = TestBed.createComponent(FORMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
