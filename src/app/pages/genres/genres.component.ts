import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Observable, of } from 'rxjs';
import { Genre, Movie } from '../../interfaces/movie.interface';
import { MovieDataService } from '../../services/movie-data.service';
import { AsyncPipe } from '@angular/common';
import { ShowItemComponent } from '../../components/show-item/show-item.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Paginator, PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-genres',
  imports: [AsyncPipe, ButtonModule, RouterLink, ShowItemComponent, Paginator],
  templateUrl: './genres.component.html',
  styleUrl: './genres.component.scss',
})
export class GenresComponent implements OnInit {
  movieDataService = inject(MovieDataService);
  route = inject(ActivatedRoute);
  genres$: Observable<Genre[]> | null = null;
  media$: Observable<Movie[]> | null = null;
  genreId = '';
  totalRecords = 20;
  currentPage = 1;

  ngOnInit() {
    this.genres$ = this.movieDataService.getMoviesGenres();

    this.route.params.subscribe((params) => {
      this.genreId = params['genreId'] || '28';
      this.loadMoviesByGenre(1);
    });
  }

  loadMoviesByGenre(page: number) {
    this.currentPage = page;
    this.movieDataService
      .getMoviesByGenre(this.genreId, page)
      .subscribe((data) => {
        this.media$ = of(data.results);
        this.totalRecords = Math.min(data.total_results, 500 * 20);
      });
  }

  pageChanged(event: PaginatorState) {
    const pageNumber = event.page !== undefined ? event.page + 1 : 1;
    this.loadMoviesByGenre(Math.min(pageNumber, 500));
  }
}
