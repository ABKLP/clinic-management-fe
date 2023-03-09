import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthModule } from "./components/auth/auth.module";
import { IndexModule } from "./components/index/index.module";
import { LayoutModule } from "./components/layout/layout.module";
import { SharedModule } from "./components/shared/shared.module";
import { UserModule } from "./components/user/user.module";
import { ModelModule } from "./models/model.module";
import { AuthGuard } from "./guards/auth.guard";
import { AdminPermissionGuard } from "./guards/admin-permission.guard";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    IndexModule,
    UserModule,
    LayoutModule,
    ModelModule,
    SharedModule,
  ],
  providers: [AuthGuard, AdminPermissionGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
