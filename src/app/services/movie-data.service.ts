import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { MoviesDto } from '../interfaces/movie.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieDataService {
  private http = inject(HttpClient);
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = '';

  getMovieByType(type: string, count = 12) {
    return this.http
      .get<MoviesDto>(`${this.apiUrl}/movie/${type}?api_key=${this.apiKey}`)
      .pipe(map((data) => data.results.slice(0, count)));
  }
}
