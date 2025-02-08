import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { MovieDto } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieDataService {
  private http = inject(HttpClient);
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = '';

  getPopularMovies() {
    return this.http.get<MovieDto>(
      `${this.apiUrl}/movie/popular?api_key=${this.apiKey}`
    );
  }
}
