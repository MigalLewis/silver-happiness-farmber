import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOderItemComponent } from './my-oder-item.component';

describe('MyOderItemComponent', () => {
  let component: MyOderItemComponent;
  let fixture: ComponentFixture<MyOderItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOderItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
