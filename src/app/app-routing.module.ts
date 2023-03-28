import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthComponent } from "./components/auth/auth.component";
import { RegisterComponent } from "./components/auth/register.component";
import { IndexComponent } from "./components/index/index.component";
import { DefaultLayoutComponent } from "./components/layout/default/default.component";
import { EmptyLayoutComponent } from "./components/layout/empty/empty.component";
import { UserListComponent } from "./components/user/list/list.component";
import { ProfileComponent } from "./components/user/profile.component";
import { MedicalRecordComponent } from "./medical-record/medical-record.component";
import { AddEditComponent } from "./add-edit/add-edit.component";
import { AppointmentListComponent } from "./components/appointment/list/list.component";
import { AppointmentAddEditComponent } from "./components/appointment/add-edit/add-edit.component";
import { AppointmentShowComponent } from "./components/appointment/show/show.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { SearchPageComponent } from "./search-page/search-page.component";
import { AuthGuard } from "./guards/auth.guard";
import { AdminPermissionGuard } from "./guards/admin-permission.guard";

const routesDefaultLayout: Routes = [
  { path: "", component: IndexComponent },
  {
    path: "admin/dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard, AdminPermissionGuard],
  },
  {
    path: "user/profile",
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "search-page",
    component: SearchPageComponent,
    canActivate: [AuthGuard, AdminPermissionGuard],
  },
  {
    path: "medical-record/:mode/:id",
    component: AddEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "medical-record/list",
    component: MedicalRecordComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "medical-record/:mode",
    component: AddEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "appointments/list",
    component: AppointmentListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "appointments/show/:id",
    component: AppointmentShowComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "appointments/:mode",
    component: AppointmentAddEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "appointments/:mode/:id",
    component: AppointmentAddEditComponent,
    canActivate: [AuthGuard],
  },
];

const routesEmptyLayout: Routes = [
  {
    path: "login",
    component: AuthComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
];

const routes: Routes = [
  {
    path: "",
    component: DefaultLayoutComponent,
    children: routesDefaultLayout,
  },
  {
    path: "auth",
    component: EmptyLayoutComponent,
    children: routesEmptyLayout,
  },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
