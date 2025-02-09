import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowItemComponent } from '../show-item/show-item.component';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-banner',
  imports: [CommonModule, ShowItemComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  @Input() title = '';
  @Input() media: Movie[] = [];
}
