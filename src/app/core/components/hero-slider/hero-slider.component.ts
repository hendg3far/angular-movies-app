import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { TruncatePipe } from '../../pipes/elipsis.pipe';
import { NumberWithCommasPipe } from '../../pipes/number-with-commas.pipe';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [RouterLink, CommonModule, TruncatePipe, NumberWithCommasPipe],
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeroSliderComponent {
  @Input() slides: any[] = [];
}
