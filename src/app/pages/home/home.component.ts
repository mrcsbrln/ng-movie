import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../../components/slider/slider.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { MovieDataService } from '../../services/movie-data.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, SliderComponent, BannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  movieDataService = inject(MovieDataService);

  upcomingMovies$ = this.movieDataService.getMovieByType('upcoming');
  topRatedMovies$ = this.movieDataService.getMovieByType('top_rated');
}
