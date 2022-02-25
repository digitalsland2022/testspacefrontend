import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentosComponent } from './ventos/ventos.component';
import { VentosDetailComponent } from './ventos-detail/ventos-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [{
  path:'', component:VentosComponent
}]

@NgModule({
  declarations: [
    VentosComponent,
    VentosDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesModule { }
