import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentosDetailComponent } from './ventos-detail.component';

describe('VentosDetailComponent', () => {
  let component: VentosDetailComponent;
  let fixture: ComponentFixture<VentosDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentosDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
