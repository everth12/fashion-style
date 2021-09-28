import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenadoresComponent } from './disenadores.component';

describe('DisenadoresComponent', () => {
  let component: DisenadoresComponent;
  let fixture: ComponentFixture<DisenadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisenadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisenadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
