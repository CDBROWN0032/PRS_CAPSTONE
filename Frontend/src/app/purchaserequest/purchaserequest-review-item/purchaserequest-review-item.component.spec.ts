import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaserequestReviewItemComponent } from './purchaserequest-review-item.component';

describe('PurchaserequestReviewItemComponent', () => {
  let component: PurchaserequestReviewItemComponent;
  let fixture: ComponentFixture<PurchaserequestReviewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaserequestReviewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaserequestReviewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
