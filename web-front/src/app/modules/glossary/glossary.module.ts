import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateGlossaryComponent } from './create/create-glossary.component';
import { GlossaryRoutingModule } from './glossary-routing.module';
import { GlossaryComponent } from './glossary.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, GlossaryRoutingModule],
  declarations: [GlossaryComponent, CreateGlossaryComponent],
})
export class GlossaryModule {}
