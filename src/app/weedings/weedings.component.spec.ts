import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeedingsComponent } from './weedings.component';

describe('WeedingsComponent', () => {
  let component: WeedingsComponent;
  let fixture: ComponentFixture<WeedingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeedingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeedingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
