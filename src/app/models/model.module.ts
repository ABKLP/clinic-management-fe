import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { AuthService } from "./auth.service";
import { RestDataSource } from "./rest.datasource";
import { UserRepository } from "./user.repository";
import { MedicalRecordRepository } from "./medical-record.repository";
import { AppointmentRepository } from "./appointment.repository";

@NgModule({
  imports: [HttpClientModule],
  providers: [
    RestDataSource,
    AuthService,
    UserRepository,
    MedicalRecordRepository,
    AppointmentRepository,
  ],
})
export class ModelModule {}
