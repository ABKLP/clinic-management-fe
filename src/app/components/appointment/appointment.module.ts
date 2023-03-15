import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { AppointmentListComponent } from "./list/list.component";
import { AppointmentAddEditComponent } from "./add-edit/add-edit.component";

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule, SharedModule],
  declarations: [AppointmentListComponent, AppointmentAddEditComponent],
  exports: [AppointmentListComponent, AppointmentAddEditComponent],
})
export class AppointmentModule {}
