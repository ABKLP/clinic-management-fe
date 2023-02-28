import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { DefaultLayoutComponent } from "./default/default.component";
import { EmptyLayoutComponent } from "./empty/empty.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SidebarComponent } from "../../sidebar/sidebar.component";
import { UserModule } from "../user/user.module";



@NgModule({
  imports: [CommonModule, RouterModule,UserModule],
  declarations: [
    DefaultLayoutComponent,
    EmptyLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  exports: [DefaultLayoutComponent, EmptyLayoutComponent, HeaderComponent,
     FooterComponent,SidebarComponent],
})
export class LayoutModule {}
