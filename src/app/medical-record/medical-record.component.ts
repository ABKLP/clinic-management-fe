import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "../models/auth.service";
import { MedicalRecord } from "../models/medical-record.model";
import { MedicalRecordRepository } from "../models/medical-record.repository";

@Component({
  selector: 'app-medical-record',
  templateUrl:'./medical-record.component.html',
  styleUrls: ['./medical-record.component.scss']
})
export class MedicalRecordComponent implements OnInit {
  title = "Medical Record";
  searching: boolean = false;
  searchPerson: string

  constructor(
    private repository: MedicalRecordRepository,
    private auth: AuthService,
    private activeRoute: ActivatedRoute
  ) {
  }

  async ngOnInit(): Promise<void> {
    await this.repository.setMedicalRecord();
    this.searching = this.activeRoute.snapshot.params["mode"] === "search";

  }
  // IF searching===true
  // t.owner.id === searchPerson
  // else
  // t.owner.id === this.auth.userId
  get medicalRecord(): MedicalRecord[] {
    return this.repository.getMedicalRecord().filter(t => t.owner.id === this.auth.userId);
  }

  deleteMethod(id: string) {
    if (confirm("Are you sure?")) {
      this.repository.deleteMedicalRecord(id);
    }
  }

}