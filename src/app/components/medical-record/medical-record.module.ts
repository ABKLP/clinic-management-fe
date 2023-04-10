import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbTypeaheadModule } from "@ng-bootstrap/ng-bootstrap";
import { LayoutModule } from "../layout/layout.module";
import { SharedModule } from "../shared/shared.module";
import { MedicalRecordListComponent } from "./list/list.component";
import { MedicalRecordAddEditComponent } from "./add-edit/add-edit.component";
import { MedicalRecordSearchComponent } from "./search/search.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    SharedModule,
    LayoutModule,
    NgbTypeaheadModule,
  ],
  declarations: [
    MedicalRecordListComponent,
    MedicalRecordSearchComponent,
    MedicalRecordAddEditComponent,
  ],
  exports: [
    MedicalRecordListComponent,
    MedicalRecordSearchComponent,
    MedicalRecordAddEditComponent,
  ],
})
export class MedicalRecordModule {}
