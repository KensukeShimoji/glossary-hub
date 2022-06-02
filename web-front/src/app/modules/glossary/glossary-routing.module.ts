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
    path: ':glossary-id/settings',
    loadChildren: () => import('../glossary-settings/glossary-settings.module').then((m) => m.GlossaryModule),
  },
  {
    path: ':glossary-id/term',
    loadChildren: () => import('../term/term.module').then((m) => m.TermModule),
  },
  {
    path: ':glossary-id',
    component: GlossaryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlossaryRoutingModule {}
