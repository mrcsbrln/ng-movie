import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../interfaces/movie.interface';
import { imagesBaseUrl } from '../../constants/images-sizes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-show-item',
  imports: [CommonModule, RouterModule],
  templateUrl: './show-item.component.html',
  styleUrl: './show-item.component.scss',
})
export class ShowItemComponent {
  @Input() showItem: Movie | null = null;
  @Input() mediumType: 'movie' | 'tv' = 'movie';

  imageBaseUrl = imagesBaseUrl;
}
