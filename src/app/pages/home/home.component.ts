import { Component, OnInit } from '@angular/core';
import { MenuData, OurWorkData, WoodData } from 'src/app/models/script';
import { RequestService } from 'src/app/service/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menuArr: MenuData[] = [
    {
      label: 'Gallery',
      url: '/gallery'
    },
    {
      label: 'Prices for services',
      url: '/prices'
    },
    {
      label: 'About',
      url: '/about'
    },
    {
      label: 'Contact',
      url: '/contact'
    },
  ];
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
  };
  ourWorkData() {
    this.request.getData<OurWorkData[]>(environment.ourWorkUrl.get).subscribe((data) => {      
      this.ourWorkDatas = data;      
    })
  }
}
