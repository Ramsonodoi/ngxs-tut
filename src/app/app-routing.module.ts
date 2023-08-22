import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZooComponent } from './components/zoo/zoo.component';

const routes: Routes = [
  {path: "zoo", component:ZooComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
