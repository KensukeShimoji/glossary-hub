import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GlossaryCardComponent } from './glossary/glossary-card.component';
import { TopRoutingModule } from './top-routing.module';
import { TopComponent } from './top.component';

@NgModule({
  imports: [CommonModule, TopRoutingModule],
  declarations: [TopComponent, GlossaryCardComponent],
})
export class TopModule {}
