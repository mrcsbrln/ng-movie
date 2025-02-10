import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { imagesBaseUrl } from '../../constants/images-sizes';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-slider',
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1s')]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  @Input() slides: Movie[] = [];
  @Input() isSlider = false;

  slideIndex = 0;

  imagesBaseUrl = imagesBaseUrl;

  ngOnInit() {
    this.changeSlide();
  }

  changeSlide() {
    if (this.isSlider) {
      setInterval(() => {
        this.slideIndex += 1;
        if (this.slideIndex > 10) {
          this.slideIndex = 0;
        }
      }, 5000);
    }
  }
}
