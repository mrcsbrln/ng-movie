import { Component, inject, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videos-embed',
  imports: [],
  templateUrl: './videos-embed.component.html',
  styleUrl: './videos-embed.component.scss',
})
export class VideosEmbedComponent implements OnInit {
  domSanitizer = inject(DomSanitizer);
  @Input() key: string | null = null;

  videoUrl: SafeResourceUrl = '';

  ngOnInit() {
    this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/' + this.key
    );
  }
}
