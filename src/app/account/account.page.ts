import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AccountPage {
  user = {
    name: 'Sophim Phath',
    email: 'sophim.phath@example.com',
    phone: '+855 603 312 05',
    accountNumber: '**** **** **** 1990',
    accountType: 'Savings',
    joined: '2025-03-14',
    profile: '../../assets/profile.jpg'
  };

  constructor() { }
}