import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { MovieDto } from '../interfaces/movie.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieDataService {
  private http = inject(HttpClient);
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = '';

  getMovieByType(type: string) {
    return this.http
      .get<MovieDto>(`${this.apiUrl}/movie/${type}?api_key=${this.apiKey}`)
      .pipe(map((data) => data.results));
  }
}
