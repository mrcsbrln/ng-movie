import { Component, inject } from '@angular/core';
import { MovieDataService } from '../../services/movie-data.service';

@Component({
  selector: 'app-slider',
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent {
  private movieDataService = inject(MovieDataService);

  movies$ = this.movieDataService.getPopularMovies();
}
