/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MailboxesComponent } from './mailboxes.component';

describe('MailboxesComponent', () => {
  let component: MailboxesComponent;
  let fixture: ComponentFixture<MailboxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailboxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
