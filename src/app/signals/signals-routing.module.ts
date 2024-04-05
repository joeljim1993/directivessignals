import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalsLayoutComponent } from './layout/signalsLayout/signalsLayout.component';
import { CounterPagePage } from './pages/counterPage/counterPage.page';
import { UserInfoPagePage } from './pages/userInfoPage/userInfoPage.page';
import { PropertiesPagesPage } from './pages/propertiesPages/propertiesPages.page';

const routes: Routes = [
  {
    path:'',
    component: SignalsLayoutComponent,
    children:[
      { path: 'counter',component: CounterPagePage },
      { path: 'user-info', component:UserInfoPagePage },
      { path: 'properties',component:PropertiesPagesPage},
      {path:'**',redirectTo:'counter' }
     ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignalsRoutingModule { }
