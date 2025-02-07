import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieDataService {
  private http = inject(HttpClient);

  getPopularMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=');
  }
}
