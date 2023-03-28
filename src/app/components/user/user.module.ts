import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ModelModule } from "src/app/models/model.module";
import { LayoutModule } from "../layout/layout.module";
import { SharedModule } from "../shared/shared.module";
import { UserListComponent } from "./list/list.component";
import { UserProfileComponent } from "./profile/profile.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    ModelModule,
    LayoutModule,
    SharedModule,
  ],
  declarations: [UserListComponent, UserProfileComponent],
  exports: [UserListComponent],
})
export class UserModule {}
