import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderProComponent } from './tender-pro.component';

describe('TenderProComponent', () => {
  let component: TenderProComponent;
  let fixture: ComponentFixture<TenderProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenderProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenderProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
