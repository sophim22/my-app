import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-check-balance',
  templateUrl: './check-balance.page.html',
  styleUrls: ['./check-balance.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CheckBalancePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
