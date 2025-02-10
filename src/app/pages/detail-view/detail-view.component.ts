import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MovieDataService } from '../../services/movie-data.service';
import { Observable } from 'rxjs';
import { Movie } from '../../interfaces/movie.interface';
import { SliderComponent } from '../../components/slider/slider.component';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-detail-view',
  imports: [CommonModule, SliderComponent, TabsModule],
  templateUrl: './detail-view.component.html',
  styleUrl: './detail-view.component.scss',
})
export class DetailViewComponent implements OnInit {
  private router = inject(ActivatedRoute);
  private movieDataService = inject(MovieDataService);

  mediumId = '';

  medium$: Observable<Movie> | null = null;

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.mediumId = params['id'];
    });
    this.medium$ = this.movieDataService.getMovieById(this.mediumId);
  }
}
