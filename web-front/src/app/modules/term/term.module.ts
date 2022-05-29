import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { AddTermComponent } from './add/add-term.component';
import { TermRoutingModule } from './term-routing.module';
import { TermComponent } from './term.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TermRoutingModule, MaterialModule],
  declarations: [TermComponent, AddTermComponent],
})
export class TermModule {}
