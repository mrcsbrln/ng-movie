import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MovieDataService } from '../../services/movie-data.service';
import { Observable } from 'rxjs';
import { Movie } from '../../interfaces/movie.interface';
import { ShowItemComponent } from '../../components/show-item/show-item.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

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
  private movieDataService = inject(MovieDataService);

  list$: Observable<Movie[]> | null = null;
  searchValue = '';

  ngOnInit(): void {
    this.getPagedList(1);
  }

  getPagedList(page: number, searchValue?: string) {
    this.list$ = this.movieDataService.searchMovies(page, searchValue);
  }

  pageChanged(event: PaginatorState) {
    const pageNumber = event.page ? event.page + 1 : 1;
    this.getPagedList(pageNumber);
    console.log(pageNumber);
  }

  searchChanged() {
    this.getPagedList(1, this.searchValue);
  }
}
