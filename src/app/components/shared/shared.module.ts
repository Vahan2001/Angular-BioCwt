import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { OurWorkComponent } from '../our-work/our-work.component';
import { FooterComponent } from '../footer/footer.component';
import { TheWoodComponent } from '../the-wood/the-wood.component';
import { AnyQuestionsComponent } from '../any-questions/any-questions.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    OurWorkComponent,
    FooterComponent,
    TheWoodComponent,
    AnyQuestionsComponent,
    AboutUsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    OurWorkComponent,
    FooterComponent,
    TheWoodComponent,
    AnyQuestionsComponent,
    AboutUsComponent,
  ]
})
export class SharedModule { }
