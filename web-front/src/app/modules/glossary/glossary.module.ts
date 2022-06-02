import { MaterialModule } from '#modules/shared/material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateGlossaryComponent } from './create/create-glossary.component';
import { GlossaryRoutingModule } from './glossary-routing.module';
import { GlossaryComponent } from './glossary.component';
import { TermListItemComponent } from './term-list/term-list-item.component';
import { TermListComponent } from './term-list/term-list.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, GlossaryRoutingModule, MaterialModule],
  declarations: [GlossaryComponent, CreateGlossaryComponent, TermListComponent, TermListItemComponent],
})
export class GlossaryModule {}
