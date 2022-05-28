import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateGlossaryComponent } from './create/create-glossary.component';
import { GlossaryComponent } from './glossary.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateGlossaryComponent,
  },
  {
    path: ':id',
    component: GlossaryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlossaryRoutingModule {}
