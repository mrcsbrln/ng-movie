import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Observable } from 'rxjs';
import { Genre, Movie } from '../../interfaces/movie.interface';
import { MovieDataService } from '../../services/movie-data.service';
import { AsyncPipe } from '@angular/common';
import { ShowItemComponent } from '../../components/show-item/show-item.component';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-genres',
  imports: [AsyncPipe, ButtonModule, RouterLink, ShowItemComponent],
  templateUrl: './genres.component.html',
  styleUrl: './genres.component.scss',
})
export class GenresComponent implements OnInit {
  movieDataService = inject(MovieDataService);
  route = inject(ActivatedRoute);
  genres$: Observable<Genre[]> | null = null;
  media$: Observable<Movie[]> | null = null;
  genreId = '';

  ngOnInit() {
    this.genres$ = this.movieDataService.getMoviesGenres();
    this.route.params.subscribe((params) => {
      this.genreId = params['genreId'];
      this.media$ = this.movieDataService.getMoviesByGenre(this.genreId);
    });
  }
}
