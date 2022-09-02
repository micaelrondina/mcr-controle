/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RelEvent-386Component } from './rel-event-386.component';

describe('RelEvent-386Component', () => {
  let component: RelEvent-386Component;
  let fixture: ComponentFixture<RelEvent-386Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelEvent-386Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelEvent-386Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
