import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { GenresDto, Movie, MoviesDto } from '../interfaces/movie.interface';
import { map } from 'rxjs';
import { VideoDto } from '../interfaces/video.interface';
import { ImageDto } from '../interfaces/image.interface';
import { CreditsDto } from '../interfaces/credits.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieDataService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;

  getMovieByType(type: string, count = 12) {
    return this.http
      .get<MoviesDto>(`${this.apiUrl}/movie/${type}?api_key=${this.apiKey}`)
      .pipe(map((data) => data.results.slice(0, count)));
  }

  getMovieById(id: string) {
    return this.http.get<Movie>(
      `${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`
    );
  }

  getMovieVideos(id: string) {
    return this.http
      .get<VideoDto>(`${this.apiUrl}/movie/${id}/videos?api_key=${this.apiKey}`)
      .pipe(map((data) => data.results));
  }

  getMovieImages(id: string) {
    return this.http
      .get<ImageDto>(`${this.apiUrl}/movie/${id}/images?api_key=${this.apiKey}`)
      .pipe(map((data) => data.backdrops));
  }

  getMovieCast(id: string) {
    return this.http
      .get<CreditsDto>(
        `${this.apiUrl}/movie/${id}/credits?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.cast));
  }

  getSimilarMovies(id: string, count = 12) {
    return this.http
      .get<MoviesDto>(
        `${this.apiUrl}/movie/${id}/similar?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.results.slice(0, count)));
  }

  searchMovies(page: number, searchValue?: string) {
    const uri = searchValue ? 'search/movie' : 'movie/popular';
    return this.http.get<MoviesDto>(
      `${this.apiUrl}/${uri}?query=${searchValue}&page=${page}&api_key=${this.apiKey}`
    );
  }

  getMoviesGenres() {
    return this.http
      .get<GenresDto>(`${this.apiUrl}/genre/movie/list?api_key=${this.apiKey}`)
      .pipe(map((data) => data.genres));
  }

  getMoviesByGenre(genreId: string, pageNumber = 1) {
    return this.http
      .get<MoviesDto>(
        `${this.apiUrl}/discover/movie?with_genres=${genreId}&page=${pageNumber}&api_key=${this.apiKey}`
      )
      .pipe(
        map((data) => {
          return data.results;
        })
      );
  }
}
