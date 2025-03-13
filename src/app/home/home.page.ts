import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage {
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

  constructor() { }
}