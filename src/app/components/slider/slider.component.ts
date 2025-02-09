import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDataService } from '../../services/movie-data.service';
import { AsyncPipe } from '@angular/common';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { imagesBaseUrl } from '../../constants/images-sizes';

@Component({
  selector: 'app-slider',
  imports: [AsyncPipe, CommonModule],
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
  private movieDataService = inject(MovieDataService);

  movies$ = this.movieDataService.getMovieByType('popular');

  slideIndex = 0;

  imagesBaseUrl = imagesBaseUrl;

  ngOnInit() {
    this.changeSlide();
  }

  changeSlide() {
    setInterval(() => {
      this.slideIndex += 1;
      if (this.slideIndex > 10) {
        this.slideIndex = 0;
      }
    }, 5000);
  }
}
