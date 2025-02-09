import { Component, Input } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';
import { imagesBaseUrl } from '../../constants/images-sizes';

@Component({
  selector: 'app-show-item',
  imports: [],
  templateUrl: './show-item.component.html',
  styleUrl: './show-item.component.scss',
})
export class ShowItemComponent {
  @Input() showItem: Movie | null = null;

  imageBaseUrl = imagesBaseUrl;
}
