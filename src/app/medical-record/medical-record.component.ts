import { Component, OnInit } from "@angular/core";
import { AuthService } from "../models/auth.service";
import { MedicalRecord } from "../models/medical-record.model";
import { MedicalRecordRepository } from "../models/medical-record.repository";

@Component({
  selector: 'app-medical-record',
  templateUrl: './medical-record.component.html',
  styleUrls: ['./medical-record.component.scss']
})
export class MedicalRecordComponent implements OnInit {
  title = "Medical Record";
 
  constructor(
    private repository: MedicalRecordRepository,
    private auth: AuthService
  ) {
  }

  async ngOnInit(): Promise<void> {
    await this.repository.setMedicalRecord();
  }

  get medicalRecord(): MedicalRecord[] {
    return this.repository.getMedicalRecord().filter(t => t.owner.id === this.auth.userId);
  }

  deleteMethod(id: string) {
    if (confirm("Are you sure?")) {
      this.repository.deleteMedicalRecord(id);
    }
  }

}