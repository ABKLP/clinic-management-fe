import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthService } from "./auth.service";
import { RestDataSource } from "./rest.datasource";
import { UserRepository } from "./user.repository";
import { MedicalRecordRepository } from "./medical-record.repository";

@NgModule({
  imports: [HttpClientModule],
  providers: [
    RestDataSource,
    AuthService,
    UserRepository,
    MedicalRecordRepository,
  ],
})
export class ModelModule {}
