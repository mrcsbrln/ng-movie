import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MovieDataService } from '../../services/movie-data.service';
import { map, Observable, tap } from 'rxjs';
import { MoviesDto } from '../../interfaces/movie.interface';
import { ShowItemComponent } from '../../components/show-item/show-item.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { TvshowsDataService } from '../../services/tvshows-data.service';
import { ActivatedRoute } from '@angular/router';
import { mapToMovieDto } from '../../interfaces/tvshow.interface';

@Component({
  selector: 'app-list',
  imports: [
    AsyncPipe,
    FormsModule,
    InputTextModule,
    PaginatorModule,
    ShowItemComponent,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  private moviesDataService = inject(MovieDataService);
  private tvshowsDataService = inject(TvshowsDataService);
  private route = inject(ActivatedRoute);

  list$: Observable<MoviesDto> | null = null;
  searchValue = '';
  mediumType: 'movie' | 'tv' = 'movie';
  totalRecords = 0;
  currentPage = 1;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.mediumType = params['type'];
      this.getPagedList(this.mediumType, 1);
    });
  }

  getPagedList(mediumType: 'movie' | 'tv', page: number, searchValue?: string) {
    const validPage = Math.min(page, 500);
    this.currentPage = validPage;

    const queryParam =
      searchValue && searchValue.trim().length > 0 ? searchValue : undefined;

    if (mediumType === 'movie') {
      this.list$ = this.moviesDataService
        .searchMovies(validPage, queryParam)
        .pipe(
          tap((data) => {
            this.totalRecords = Math.min(data.total_results, 500 * 20);
          })
        );
    } else {
      this.list$ = this.tvshowsDataService
        .searchTvshows(validPage, queryParam)
        .pipe(
          map(mapToMovieDto),
          tap((data) => {
            this.totalRecords = Math.min(data.total_results, 500 * 20);
          })
        );
    }
  }

  pageChanged(event: PaginatorState) {
    const pageNumber = event.page ? event.page + 1 : 1;
    this.getPagedList(this.mediumType, pageNumber, this.searchValue);
  }

  searchChanged() {
    this.getPagedList(this.mediumType, 1, this.searchValue);
  }
}
