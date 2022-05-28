import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GlossaryRoutingModule } from './glossary-routing.module';
import { GlossaryComponent } from './glossary.component';

@NgModule({
  imports: [CommonModule, GlossaryRoutingModule],
  declarations: [GlossaryComponent],
})
export class GlossaryModule {}
