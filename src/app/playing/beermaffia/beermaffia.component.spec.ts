import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeermaffiaComponent } from './beermaffia.component';

describe('BeermaffiaComponent', () => {
  let component: BeermaffiaComponent;
  let fixture: ComponentFixture<BeermaffiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeermaffiaComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeermaffiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
