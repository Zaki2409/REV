import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DATABINDINGComponent } from './data-binding.component';

describe('DATABINDINGComponent', () => {
  let component: DATABINDINGComponent;
  let fixture: ComponentFixture<DATABINDINGComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DATABINDINGComponent]
    });
    fixture = TestBed.createComponent(DATABINDINGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
