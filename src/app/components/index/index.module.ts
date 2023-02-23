import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { IndexComponent } from "./index.component";

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule, SharedModule],
  declarations: [IndexComponent],
  exports: [IndexComponent],
})
export class IndexModule {}
