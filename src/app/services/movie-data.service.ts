import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { MovieDto } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieDataService {
  private http = inject(HttpClient);

  getPopularMovies() {
    return this.http.get<MovieDto>(
      'https://api.themoviedb.org/3/movie/popular?api_key='
    );
  }
}
