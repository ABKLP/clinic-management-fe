import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthModule } from "./components/auth/auth.module";
import { ModelModule } from "./models/model.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule, ModelModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
