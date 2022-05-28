import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/top/top.module').then((m) => m.TopModule),
  },
  {
    path: 'glossary',
    loadChildren: () => import('./modules/glossary/glossary.module').then((m) => m.GlossaryModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
