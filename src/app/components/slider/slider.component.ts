import { Component, inject } from '@angular/core';
import { MovieDataService } from '../../services/movie-data.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-slider',
  imports: [AsyncPipe],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent {
  private movieDataService = inject(MovieDataService);

  movies$ = this.movieDataService.getPopularMovies();
}
