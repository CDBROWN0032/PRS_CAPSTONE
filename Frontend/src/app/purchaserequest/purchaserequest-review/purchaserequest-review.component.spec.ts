import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaserequestReviewComponent } from './purchaserequest-review.component';

describe('PurchaserequestReviewComponent', () => {
  let component: PurchaserequestReviewComponent;
  let fixture: ComponentFixture<PurchaserequestReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaserequestReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaserequestReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
