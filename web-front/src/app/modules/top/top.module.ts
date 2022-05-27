import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TopRoutingModule } from './top-routing.module';
import { TopComponent } from './top.component';

@NgModule({
  imports: [CommonModule, TopRoutingModule],
  declarations: [TopComponent],
})
export class TopModule {}
