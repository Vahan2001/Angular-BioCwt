import { Component, OnInit } from '@angular/core';
import { OurWorkData, WoodData } from 'src/app/models/script';
import { RequestService } from 'src/app/service/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit{
  woodDatas: WoodData[] = [];
  ourWorkDatas: OurWorkData[] = [];
  constructor(private request: RequestService) { }
  ngOnInit(): void {
    this.getWoodData();
    this.ourWorkData();
  }
  getWoodData() {
    this.request.getData<WoodData[]>(environment.woodUrl.get).subscribe((data) => {
      this.woodDatas = data;      
    })
  }
  ourWorkData() {
    this.request.getData<OurWorkData[]>(environment.ourWorkUrl.get).subscribe((data) => {      
      this.ourWorkDatas = data;      
    })
  }
}
