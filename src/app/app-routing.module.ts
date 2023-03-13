import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthComponent } from "./components/auth/auth.component";
import { RegisterComponent } from "./components/auth/register.component";
import { IndexComponent } from "./components/index/index.component";
import { DefaultLayoutComponent } from "./components/layout/default/default.component";
import { EmptyLayoutComponent } from "./components/layout/empty/empty.component";
import { UserListComponent } from "./components/user/list/list.component";
import { AuthGuard } from "./guards/auth.guard";
import { AdminPermissionGuard } from "./guards/admin-permission.guard";
import { ProfileComponent } from "./components/user/profile.component";
import { MedicalRecordComponent } from "./medical-record/medical-record.component";
import { AddEditComponent } from "./add-edit/add-edit.component";

const routesDefaultLayout: Routes = [
  { path: "", component: IndexComponent },
  {
    path: "users/list",
    component: UserListComponent,
    canActivate: [AuthGuard, AdminPermissionGuard],
  },
  {
    path: "user/profile",
    component: ProfileComponent,
    canActivate: [AuthGuard],
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
    path: "medical-record/add",
    component: AddEditComponent,
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
