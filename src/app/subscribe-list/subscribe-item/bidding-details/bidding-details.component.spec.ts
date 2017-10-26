import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddingDetailsComponent } from './bidding-details.component';

describe('BiddingDetailsComponent', () => {
  let component: BiddingDetailsComponent;
  let fixture: ComponentFixture<BiddingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiddingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiddingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
