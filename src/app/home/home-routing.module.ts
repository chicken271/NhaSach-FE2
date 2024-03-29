import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FrontComponent } from './front/front.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path: '',component: FrontComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }