import { Component } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
// import Swiper core and required modules
import SwiperCore, { Swiper, Virtual } from 'swiper';
SwiperCore.use([Virtual]);


@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [],
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.scss']
})
export class HeroSliderComponent {

}
