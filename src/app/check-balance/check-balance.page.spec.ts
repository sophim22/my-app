import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckBalancePage } from './check-balance.page';

describe('CheckBalancePage', () => {
  let component: CheckBalancePage;
  let fixture: ComponentFixture<CheckBalancePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckBalancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
