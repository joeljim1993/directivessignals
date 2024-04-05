import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalsRoutingModule } from './signals-routing.module';
import { RouterModule } from '@angular/router';
import { SignalsLayoutComponent } from './layout/signalsLayout/signalsLayout.component';
import { CounterPagePage } from './pages/counterPage/counterPage.page';
import { UserInfoPagePage } from './pages/userInfoPage/userInfoPage.page';
import { PropertiesPagesPage } from './pages/propertiesPages/propertiesPages.page';
import { SideMenuComponent } from './components/sideMenu/sideMenu.component';


@NgModule({
  declarations: [
    SignalsLayoutComponent,
    CounterPagePage,
    UserInfoPagePage,
    PropertiesPagesPage,
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    SignalsRoutingModule,
    RouterModule
  ]
})
export class SignalsModule { }
