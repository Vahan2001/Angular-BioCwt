import { Component, Input } from '@angular/core';
import { WoodData } from 'src/app/models/script';

@Component({
  selector: 'app-the-wood',
  templateUrl: './the-wood.component.html',
  styleUrls: ['./the-wood.component.css']
})
export class TheWoodComponent {
  @Input() elements: WoodData[] = [];
}
