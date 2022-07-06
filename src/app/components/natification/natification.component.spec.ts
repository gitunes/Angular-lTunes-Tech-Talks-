import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatificationComponent } from './natification.component';

describe('NatificationComponent', () => {
  let component: NatificationComponent;
  let fixture: ComponentFixture<NatificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NatificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NatificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
