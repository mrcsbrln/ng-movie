import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../../components/slider/slider.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { MovieDataService } from '../../services/movie-data.service';
import { TvshowsDataService } from '../../services/tvshows-data.service';
import { map } from 'rxjs';
import { mapToMovies } from '../../interfaces/tvshow.interface';

@Component({
  selector: 'app-home',
  imports: [CommonModule, SliderComponent, BannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private movieDataService = inject(MovieDataService);
  private tvshowsDataService = inject(TvshowsDataService);

  popularMovies$ = this.movieDataService.getMovieByType('popular');
  upcomingMovies$ = this.movieDataService.getMovieByType('upcoming');
  topRatedMovies$ = this.movieDataService.getMovieByType('top_rated');
  popularTvshows$ = this.tvshowsDataService
    .getTvshowByType('popular')
    .pipe(map(mapToMovies));
}
