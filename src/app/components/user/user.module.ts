import { NgModule } from "@angular/core";
import { UserListComponent } from "./list/list.component";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "src/app/models/model.module";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { ProfileComponent } from "./profile.component";
import { SidebarComponent } from "src/app/sidebar/sidebar.component";
import { MedicalRecordComponent } from "src/app/medicalRecord/medicalRecord.component";


@NgModule({
  imports: 
  [BrowserModule,
    FormsModule,
    RouterModule,
    SharedModule,
    ModelModule,
  ],
    
  declarations: [UserListComponent,ProfileComponent,SidebarComponent,MedicalRecordComponent],
  exports: [UserListComponent],
})
export class UserModule {}
