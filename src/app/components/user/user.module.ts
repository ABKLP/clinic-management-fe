import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile.component";
import { SharedModule } from "../shared/shared.module";
import { MedicalHistoryComponent } from "src/app/medical-history/medical-history.component";

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule,
    SharedModule],
  declarations: [ProfileComponent,MedicalHistoryComponent],
  exports: [ProfileComponent,MedicalHistoryComponent],
})
export class UserModule { }
