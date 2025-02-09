import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-view',
  imports: [],
  templateUrl: './detail-view.component.html',
  styleUrl: './detail-view.component.scss',
})
export class DetailViewComponent implements OnInit {
  private router = inject(ActivatedRoute);

  mediumId = 0;

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.mediumId = params['id'];
    });
  }
}
