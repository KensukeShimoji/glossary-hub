import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlossarySettingsComponent } from './glossary-settings.component';

const routes: Routes = [
  {
    path: '',
    component: GlossarySettingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlossarySettingsRoutingModule {}
