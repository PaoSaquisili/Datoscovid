import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidMuertesComponent } from './covid-muertes.component';

describe('CovidMuertesComponent', () => {
  let component: CovidMuertesComponent;
  let fixture: ComponentFixture<CovidMuertesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidMuertesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidMuertesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
