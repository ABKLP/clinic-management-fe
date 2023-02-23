import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AuthComponent } from "./auth.component";
import { RegisterComponent } from "./register.component";

@NgModule({
  imports: [FormsModule, CommonModule, RouterModule],
  declarations: [AuthComponent, RegisterComponent],
  providers: [],
})
export class AuthModule {}
