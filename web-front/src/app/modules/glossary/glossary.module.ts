import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { CreateGlossaryComponent } from './create/create-glossary.component';
import { GlossaryRoutingModule } from './glossary-routing.module';
import { GlossaryComponent } from './glossary.component';
import { GlossarySettingsComponent } from './settings/glossary-settings.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, GlossaryRoutingModule, MaterialModule],
  declarations: [GlossaryComponent, CreateGlossaryComponent, GlossarySettingsComponent],
})
export class GlossaryModule {}
