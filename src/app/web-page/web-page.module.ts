import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebPageRoutingModule } from './web-page-routing.module';
import { WebPageComponent } from './web-page.component';
import { LayoutComponent } from './layout/layout.component';
import { MainSectionComponent } from './layout/main-section/main-section.component';
import { HeaderComponent } from './layout/header/header.component';
import { SecondSectionComponent } from './layout/second-section/second-section.component';
import { ThirdSectionComponent } from './layout/third-section/third-section.component';
import { FourSectionComponent } from './layout/four-section/four-section.component';
import { FiveSectionComponent } from './layout/five-section/five-section.component';
import { SixSectionComponent } from './layout/six-section/six-section.component';
import { ContactsComponent } from './layout/contacts/contacts.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProductCardComponent } from './layout/four-section/product-card/product-card.component';
import { ProductGroupComponent } from './layout/four-section/product-group/product-group.component';
import { CardComponent } from './layout/six-section/card/card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    WebPageComponent,
    LayoutComponent,
    MainSectionComponent,
    HeaderComponent,
    SecondSectionComponent,
    ThirdSectionComponent,
    FourSectionComponent,
    FiveSectionComponent,
    SixSectionComponent,
    ContactsComponent,
    FooterComponent,
    ProductCardComponent,
    ProductGroupComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    WebPageRoutingModule,
    NgbModule
  ]
})
export class WebPageModule { }
