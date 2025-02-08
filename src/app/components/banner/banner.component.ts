import { Component } from '@angular/core';
import { ShowItemComponent } from '../show-item/show-item.component';

@Component({
  selector: 'app-banner',
  imports: [ShowItemComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {}
