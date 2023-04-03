import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { AppointmentListComponent } from "./list/list.component";
import { AppointmentAddEditComponent } from "./add-edit/add-edit.component";
import { AppointmentShowComponent } from "./show/show.component";
import { LayoutModule } from "../layout/layout.module";

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule, SharedModule,LayoutModule],
  declarations: [
    AppointmentListComponent,
    AppointmentAddEditComponent,
    AppointmentShowComponent,
  ],
  exports: [
    AppointmentListComponent,
    AppointmentAddEditComponent,
    AppointmentShowComponent,
  ],
})
export class AppointmentModule {}
