import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-svg-image',
  standalone: true,
  imports: [CommonModule],
  template: `
    <object
      *ngIf="currentSVG"
      type="image/svg+xml"
      [data]="SVGFile"
      [height]="height"
      [width]="width"></object>
  `,
})
export class SvgImageComponent implements OnInit {
  SVGFile?: SafeUrl;
  currentSVG?: boolean;
  @Input() path!: string;
  @Input() height = 64;
  @Input() width = 64;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.currentSVG = true;
    this.SVGFile = this.sanitizer.bypassSecurityTrustResourceUrl(this.path);
  }
}
