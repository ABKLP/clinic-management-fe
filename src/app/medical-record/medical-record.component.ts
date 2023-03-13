import { Component, OnInit } from "@angular/core";
import { AuthService } from "../models/auth.service";
import { MedicalRecordList } from "../models/medical-record.model";
import { MedicalRecordRepository } from "../models/medical-record.repository";
import { toDateString } from "../utils";

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
    await this.repository.setMedicalRecordList();
  }

  get medicalList(): MedicalRecordList[] {
    return this.repository.getMedicalRecordList().filter(t => t.owner.id === this.auth.userId);
  }

  deleteMethod(id: string) {
    if (confirm("Are you sure?")) {
      this.repository.deleteMedicalRecordList(id);
    }
  }

}