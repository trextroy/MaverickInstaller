import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { LoginComponent } from './login.component'
import { SuccessComponent } from './success.component'

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { 
    path: 'login',
    name: 'LoginPage',
    component: LoginComponent,
    useAsDefault: true
  },{
    path:'success'
    name: 'SuccessPage',
    component: SuccessComponent,
  }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
 
export class AppRoutingModule {}