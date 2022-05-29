import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTermComponent } from './add/add-term.component';
import { TermComponent } from './term.component';

const routes: Routes = [
  {
    path: 'create',
    component: AddTermComponent,
  },
  {
    path: ':id',
    component: TermComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermRoutingModule {}
