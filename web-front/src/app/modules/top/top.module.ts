import { GlossaryCardModule } from '#modules/shared/glossary-card/glossary-card.module';
import { MaterialModule } from '#modules/shared/material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TopRoutingModule } from './top-routing.module';
import { TopComponent } from './top.component';

@NgModule({
  imports: [CommonModule, MaterialModule, TopRoutingModule, GlossaryCardModule],
  declarations: [TopComponent],
})
export class TopModule {}
