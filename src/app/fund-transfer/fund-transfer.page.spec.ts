import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FundTransferPage } from './fund-transfer.page';

describe('FundTransferPage', () => {
  let component: FundTransferPage;
  let fixture: ComponentFixture<FundTransferPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FundTransferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
