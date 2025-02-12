import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MovieDataService } from '../../services/movie-data.service';
import { map, Observable } from 'rxjs';
import { Movie } from '../../interfaces/movie.interface';
import { SliderComponent } from '../../components/slider/slider.component';
import { TabsModule } from 'primeng/tabs';
import { IMAGE_SIZES } from '../../constants/images-sizes';
import { Video } from '../../interfaces/video.interface';
import { Image } from '../../interfaces/image.interface';
import { VideosEmbedComponent } from '../../components/videos-embed/videos-embed.component';
import { ImageModule } from 'primeng/image';
import { CarouselModule } from 'primeng/carousel';
import { Actor } from '../../interfaces/credits.interface';
import { BannerComponent } from '../../components/banner/banner.component';
import { TvshowsDataService } from '../../services/tvshows-data.service';
import { mapToMovie } from '../../interfaces/tvshow.interface';

@Component({
  selector: 'app-detail-view',
  imports: [
    CommonModule,
    SliderComponent,
    TabsModule,
    VideosEmbedComponent,
    ImageModule,
    CarouselModule,
    BannerComponent,
  ],
  templateUrl: './detail-view.component.html',
  styleUrl: './detail-view.component.scss',
})
export class DetailViewComponent implements OnInit {
  private router = inject(ActivatedRoute);
  private movieDataService = inject(MovieDataService);
  private tvshowDataService = inject(TvshowsDataService);

  mediumId = '';
  mediumType: 'movie' | 'tv' = 'movie';
  medium$: Observable<Movie> | null = null;
  imagesSizes = IMAGE_SIZES;
  mediumVideos$: Observable<Video[]> | null = null;
  mediumImages$: Observable<Image[]> | null = null;
  mediumCast$: Observable<Actor[]> | null = null;
  similarMovies$: Observable<Movie[]> | null = null;

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.mediumId = params['id'];
      this.mediumType = params['type'];
    });
    if (this.mediumType === 'movie') {
      this.medium$ = this.movieDataService.getMovieById(this.mediumId);
      this.mediumVideos$ = this.movieDataService.getMovieVideos(this.mediumId);
      this.mediumImages$ = this.movieDataService.getMovieImages(this.mediumId);
      this.mediumCast$ = this.movieDataService.getMovieCast(this.mediumId);
      this.similarMovies$ = this.movieDataService.getSimilarMovies(
        this.mediumId
      );
    }
    if (this.mediumType === 'tv') {
      this.medium$ = this.tvshowDataService
        .getTvshowById(this.mediumId)
        .pipe(map(mapToMovie));
      this.mediumVideos$ = this.tvshowDataService.getTvshowVideos(
        this.mediumId
      );
      this.mediumImages$ = this.tvshowDataService.getTvshowImages(
        this.mediumId
      );
      this.mediumCast$ = this.tvshowDataService.getTvshowCast(this.mediumId);
      this.similarMovies$ = this.tvshowDataService.getSimilarTvshows(
        this.mediumId
      );
    }
  }
}
