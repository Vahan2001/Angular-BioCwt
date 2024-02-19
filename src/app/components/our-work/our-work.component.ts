import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { OurWorkData } from 'src/app/models/script';

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.css']
})
export class OurWorkComponent {
  @Input() elements: OurWorkData[] = [];
  offset: number = 0;
  @ViewChild('sliderLine') sliderLine?: ElementRef;
  nextImg() {
    this.offset += 1130
    if(this.offset > 2260) {
      this.offset = 0;
    }
    if (this.sliderLine) {
      this.sliderLine.nativeElement.style.left = `-${this.offset}px`;
    }
  }
  prewImg() {
    this.offset -= 1130
    if(this.offset < 0) {
      this.offset = 2260;
    }
    if (this.sliderLine) {
      this.sliderLine.nativeElement.style.left = `-${this.offset}px`;
    }
  }
}
