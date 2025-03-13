// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { AccountPage } from './account/account.page';
import { TabsPage } from './tabs/tabs.page';
import { TransactionsPage } from './transactions/transactions.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        component: HomePage,
      },
      {
        path: 'transactions',
        component: TransactionsPage,
      },
      {
        path: 'accounts',
        component: AccountPage,
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then( m => m.TabsPage)
  },
  {
    path: 'account',
    loadComponent: () => import('./account/account.page').then( m => m.AccountPage)
  },
  {
    path: 'fund-transfer',
    loadComponent: () => import('./fund-transfer/fund-transfer.page').then( m => m.FundTransferPage)
  },
  {
    path: 'statement',
    loadComponent: () => import('./statement/statement.page').then( m => m.StatementPage)
  },
  {
    path: 'loans',
    loadComponent: () => import('./loans/loans.page').then( m => m.LoansPage)
  },
  {
    path: 'deposit',
    loadComponent: () => import('./deposit/deposit.page').then( m => m.DepositPage)
  },
  {
    path: 'more',
    loadComponent: () => import('./more/more.page').then( m => m.MorePage)
  },
  {
    path: 'check-balance',
    loadComponent: () => import('./check-balance/check-balance.page').then( m => m.CheckBalancePage)
  },
  {
    path: 'transactions',
    loadComponent: () => import('./transactions/transactions.page').then( m => m.TransactionsPage)
  }
];