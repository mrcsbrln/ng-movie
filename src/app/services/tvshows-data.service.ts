import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Tvshow, TvshowsDto } from '../interfaces/tvshow.interface';
import { VideoDto } from '../interfaces/video.interface';
import { ImageDto } from '../interfaces/image.interface';
import { CreditsDto } from '../interfaces/credits.interface';
import { MoviesDto } from '../interfaces/movie.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TvshowsDataService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;
  private bearerToken = environment.bearerToken; // Statt apiKey

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.bearerToken}`,
    });
  }

  getTvshowsByType(type: string, count = 12) {
    return this.http
      .get<TvshowsDto>(`${this.apiUrl}/tv/${type}`, {
        headers: this.getHeaders(),
      })
      .pipe(map((data) => data.results.slice(0, count)));
  }

  getTvshowById(id: string) {
    return this.http.get<Tvshow>(`${this.apiUrl}/tv/${id}`, {
      headers: this.getHeaders(),
    });
  }

  getTvshowVideos(id: string) {
    return this.http
      .get<VideoDto>(`${this.apiUrl}/tv/${id}/videos`, {
        headers: this.getHeaders(),
      })
      .pipe(map((data) => data.results));
  }

  getTvshowImages(id: string) {
    return this.http
      .get<ImageDto>(`${this.apiUrl}/tv/${id}/images`, {
        headers: this.getHeaders(),
      })
      .pipe(map((data) => data.backdrops));
  }

  getTvshowCast(id: string) {
    return this.http
      .get<CreditsDto>(`${this.apiUrl}/tv/${id}/credits`, {
        headers: this.getHeaders(),
      })
      .pipe(map((data) => data.cast));
  }

  getSimilarTvshows(id: string, count = 12) {
    return this.http
      .get<MoviesDto>(`${this.apiUrl}/tv/${id}/similar`, {
        headers: this.getHeaders(),
      })
      .pipe(map((data) => data.results.slice(0, count)));
  }

  searchTvshows(page: number, searchValue?: string) {
    const uri = searchValue ? 'search/tv' : 'tv/popular';
    return this.http.get<TvshowsDto>(
      `${this.apiUrl}/${uri}?query=${searchValue}&page=${page}`,
      { headers: this.getHeaders() }
    );
  }
}
