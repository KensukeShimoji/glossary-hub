import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

const modules = [MatTabsModule];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class MaterialModule {}
