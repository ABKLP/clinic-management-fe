import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MedicalHistoryComponent } from "./medical-history/medical-history.component";

import { AuthComponent } from "./components/auth/auth.component";
import { RegisterComponent } from "./components/auth/register.component";
import { IndexComponent } from "./components/index/index.component";
import { DefaultLayoutComponent } from "./components/layout/default/default.component";
import { EmptyLayoutComponent } from "./components/layout/empty/empty.component";
import { ProfileComponent } from "./components/user/profile.component";

const routesDefaultLayout: Routes = [
  { path: "", 
    component: IndexComponent 
  },
  {
    path: "user/profile",
    component: ProfileComponent,
    // component: ProfileComponent,
    // canActivate: [AuthComponent],
  },
  {
    path: "medical-history",
    component: MedicalHistoryComponent,
    // component: ProfileComponent,
    // canActivate: [AuthComponent],
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
