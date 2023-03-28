import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { UserModule } from "../user/user.module";
import { DashboardComponent } from "./dashboard.component";

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule, SharedModule, UserModule],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
})
export class DashboardModule {}
