import { Component } from '@angular/core';
import { MenuData } from 'src/app/models/script';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent {
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
   ]
}
