/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GerFilasEmissorComponent } from './ger-filas-emissor.component';

describe('GerFilasEmissorComponent', () => {
  let component: GerFilasEmissorComponent;
  let fixture: ComponentFixture<GerFilasEmissorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerFilasEmissorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerFilasEmissorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
