import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentosComponent } from './ventos.component';

describe('VentosComponent', () => {
  let component: VentosComponent;
  let fixture: ComponentFixture<VentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
