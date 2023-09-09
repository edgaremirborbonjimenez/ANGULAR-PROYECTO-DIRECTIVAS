import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienesSomosComponentComponent } from './quienes-somos-component.component';

describe('QuienesSomosComponentComponent', () => {
  let component: QuienesSomosComponentComponent;
  let fixture: ComponentFixture<QuienesSomosComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuienesSomosComponentComponent]
    });
    fixture = TestBed.createComponent(QuienesSomosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
