import { Component, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Transaction {
  date: string;
  type: string;
  amount: number;
  status: string;
  description: string;
  accountNumber: string;
}

interface Account {
  accountNumber: string;
  balance: number;
}

@Component({
  selector: 'app-transaction',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TransactionsPage implements AfterViewInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1.2,
    spaceBetween: 10,
    centeredSlides: true,
    direction: 'horizontal',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };

  accounts: Account[] = [
    { accountNumber: '**** **** **** 1990', balance: 10250.00 },
    { accountNumber: '**** **** **** 4567', balance: 5500.00 },
  ];

  selectedAccount: Account = this.accounts[0]; 

  transactions: Transaction[] = [
    {
      date: '2025-03-10',
      type: 'Deposit',
      amount: 5000.00,
      status: 'Completed',
      description: 'Salary Deposit',
      accountNumber: '**** **** **** 1990',
    },
    {
      date: '2025-03-09',
      type: 'Withdrawal',
      amount: -1200.00,
      status: 'Completed',
      description: 'ATM Withdrawal',
      accountNumber: '**** **** **** 1990',
    },
    {
      date: '2025-03-09',
      type: 'Withdrawal',
      amount: -5000.00,
      status: 'Completed',
      description: 'ATM Withdrawal',
      accountNumber: '**** **** **** 1990',
    },
    {
      date: '2025-03-08',
      type: 'Transfer',
      amount: -750.00,
      status: 'Completed',
      description: 'Transfer to John Doe',
      accountNumber: '**** **** **** 4567',
    },
    {
      date: '2025-03-07',
      type: 'Deposit',
      amount: 2000.00,
      status: 'Pending',
      description: 'Check Deposit',
      accountNumber: '**** **** **** 4567',
    },
  ];

  filteredTransactions: Transaction[] = [];

  constructor() {
    this.updateTransactions(); 
  }

  ngAfterViewInit() {
    const swiper = document.querySelector('swiper-container')?.swiper;
    if (swiper) {
      swiper.on('slideChange', () => {
        this.onSlideChange();
      });
    }
  }

  onSlideChange() {
    const swiper = document.querySelector('swiper-container')?.swiper;
    if (swiper) {
      const index = swiper.realIndex;
      if (index >= 0 && index < this.accounts.length) {
        this.selectedAccount = this.accounts[index];
        this.updateTransactions();
        console.log('Slide changed to account:', this.selectedAccount.accountNumber, this.filteredTransactions);
      }
    }
  }

  updateTransactions() {
    this.filteredTransactions = this.transactions.filter(
      (t) => t.accountNumber === this.selectedAccount.accountNumber
    );
  }

  doRefresh(event: any) {
    console.log('Refreshing transactions...');
    this.updateTransactions(); 
    setTimeout(() => {
      event.target.complete(); 
    }, 1000); 
  }
}