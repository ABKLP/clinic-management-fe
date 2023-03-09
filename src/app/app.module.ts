import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthGuard } from "./components/auth/auth.guard";
import { AuthModule } from "./components/auth/auth.module";
import { IndexModule } from "./components/index/index.module";
import { LayoutModule } from "./components/layout/layout.module";
import { SharedModule } from "./components/shared/shared.module";
import { UserModule } from "./components/user/user.module";
import { ModelModule } from "./models/model.module";

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
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
