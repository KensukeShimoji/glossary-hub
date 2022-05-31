import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../material.module";
import { GlossaryCardComponent } from "./glossary-card.component";

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [GlossaryCardComponent],
  exports: [GlossaryCardComponent]
})
export class GlossaryCardModule {}