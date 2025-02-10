import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosEmbedComponent } from './videos-embed.component';

describe('VideosEmbedComponent', () => {
  let component: VideosEmbedComponent;
  let fixture: ComponentFixture<VideosEmbedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideosEmbedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideosEmbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
