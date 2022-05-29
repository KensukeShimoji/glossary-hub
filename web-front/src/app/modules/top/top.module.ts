import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material.module';
import { GlossaryCardComponent } from './card/glossary-card.component';
import { TopRoutingModule } from './top-routing.module';
import { TopComponent } from './top.component';

@NgModule({
  imports: [CommonModule, MaterialModule, TopRoutingModule],
  declarations: [TopComponent, GlossaryCardComponent],
})
export class TopModule {}
