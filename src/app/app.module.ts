import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { IndexModule } from "./components/index/index.module";
import { AuthModule } from "./components/auth/auth.module";
import { LayoutModule } from "./components/layout/layout.module";
import { SharedModule } from "./components/shared/shared.module";
import { UserModule } from "./components/user/user.module";
import { ModelModule } from "./models/model.module";
import { AppointmentModule } from "./components/appointment/appointment.module";
import { AuthGuard } from "./guards/auth.guard";
import { AdminPermissionGuard } from "./guards/admin-permission.guard";
import { EmployeePermissionGuard } from "./guards/employee-permission.guard";
import { DashboardModule } from "./components/dashboard/dashboard.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AuthModule,
    IndexModule,
    UserModule,
    AppointmentModule,
    DashboardModule,
    LayoutModule,
    ModelModule,
    SharedModule,
  ],
  providers: [AuthGuard, AdminPermissionGuard, EmployeePermissionGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
