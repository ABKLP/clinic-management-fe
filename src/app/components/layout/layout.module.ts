import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { DefaultLayoutComponent } from "./default/default.component";
import { EmptyLayoutComponent } from "./empty/empty.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    DefaultLayoutComponent,
    EmptyLayoutComponent,
    HeaderComponent,
    FooterComponent,
  ],
  exports: [
    DefaultLayoutComponent,
    EmptyLayoutComponent,
    HeaderComponent,
    FooterComponent,
  ],
})
export class LayoutModule {}
