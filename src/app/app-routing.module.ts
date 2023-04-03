import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [

  {
    path:'',redirectTo:'/profile/admin',pathMatch:'full'
  },
  // path for ProfileComponent
  {
    path:'profile/admin',component:ProfileComponent
  },

  // path for ProfileViewComponent
  {
    path:'profile/view',component:ProfileViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
