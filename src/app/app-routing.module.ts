import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthComponent } from "./components/auth/auth.component";
import { AuthGuard } from "./components/auth/auth.guard";
import { RegisterComponent } from "./components/auth/register.component";
import { IndexComponent } from "./components/index/index.component";
import { DefaultLayoutComponent } from "./components/layout/default/default.component";
import { EmptyLayoutComponent } from "./components/layout/empty/empty.component";
import { UserListComponent } from "./components/user/list/list.component";

const routesDefaultLayout: Routes = [
  { path: "", component: IndexComponent },
  {
    path: "users/list",
    component: UserListComponent,
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
