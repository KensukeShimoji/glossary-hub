import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ProfileRoutingModule, MaterialModule],
  declarations: [ProfileComponent],
})
export class ProfileModule {}
