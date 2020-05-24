import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WesternsComponent } from './westerns.component';

describe('WesternsComponent', () => {
  let component: WesternsComponent;
  let fixture: ComponentFixture<WesternsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WesternsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WesternsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
