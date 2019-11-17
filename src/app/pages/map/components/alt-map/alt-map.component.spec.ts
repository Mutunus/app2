import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltMapComponent } from './alt-map.component';

describe('AltMapComponent', () => {
  let component: AltMapComponent;
  let fixture: ComponentFixture<AltMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
