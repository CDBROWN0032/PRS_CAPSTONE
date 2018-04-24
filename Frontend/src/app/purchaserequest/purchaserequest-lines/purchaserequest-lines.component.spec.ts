import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaserequestLinesComponent } from './purchaserequest-lines.component';

describe('PurchaserequestLinesComponent', () => {
  let component: PurchaserequestLinesComponent;
  let fixture: ComponentFixture<PurchaserequestLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaserequestLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaserequestLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
