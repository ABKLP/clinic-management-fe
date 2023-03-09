import { NgModule } from "@angular/core";
import { UserListComponent } from "./list/list.component";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "src/app/models/model.module";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    ModelModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    SharedModule,
  ],
  declarations: [UserListComponent],
  exports: [UserListComponent],
})
export class UserModule {}
