import { Component } from '@angular/core';
import { OurWorkData } from 'src/app/models/script';
import { RequestService } from 'src/app/service/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
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
