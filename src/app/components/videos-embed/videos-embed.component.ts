import { Component, inject, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videos-embed',
  templateUrl: './videos-embed.component.html',
  styleUrl: './videos-embed.component.scss',
})
export class VideosEmbedComponent implements OnInit {
  domSanitizer = inject(DomSanitizer);
  @Input() key: string | null = null;

  videoUrl: SafeResourceUrl = '';
  showVideo = false;

  ngOnInit() {
    if (this.key) {
      this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
        'https://www.youtube-nocookie.com/embed/' + this.key
      );
    }
  }

  allowVideo() {
    this.showVideo = true;
  }
}
