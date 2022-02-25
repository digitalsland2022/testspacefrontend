import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
export const appRoutes:Routes = [
    {path:'', component:HomeComponent},
    {path:'ventos', loadChildren:()=>import('./pages/pages.module').then(m=>m.PagesModule)}
]