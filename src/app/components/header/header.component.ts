import { Component } from '@angular/core';
import { MenuData } from 'src/app/models/script';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
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
