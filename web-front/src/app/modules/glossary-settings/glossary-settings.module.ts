import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { GlossarySettingsRoutingModule } from './glossary-settings-routing.module';
import { GlossarySettingsComponent } from './glossary-settings.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, GlossarySettingsRoutingModule, MaterialModule],
  declarations: [GlossarySettingsComponent],
})
export class GlossaryModule {}
