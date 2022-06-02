import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateGlossaryComponent } from './create/create-glossary.component';
import { GlossaryComponent } from './glossary.component';
import { GlossarySettingsComponent } from './glossary-settings/glossary-settings.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateGlossaryComponent,
  },
  {
    path: ':glossary-id/settings',
    component: GlossarySettingsComponent,
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
