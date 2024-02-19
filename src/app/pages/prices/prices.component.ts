import { Component, Input, OnInit } from '@angular/core';
import { OurWorkData } from 'src/app/models/script';
import { RequestService } from 'src/app/service/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit{
  ourWorkDatas: OurWorkData[] = [];
  constructor(private request: RequestService) { }
  ngOnInit(): void {
    this.ourWorkData();
  }
  ourWorkData() {
    this.request.getData<OurWorkData[]>(environment.ourWorkUrl.get).subscribe((data) => {      
      this.ourWorkDatas = data;      
    })
  }
}
