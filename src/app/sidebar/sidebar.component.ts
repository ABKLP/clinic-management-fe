import { Component, Input, OnInit } from "@angular/core";
import { AuthService } from "src/app/models/auth.service";
import { ActivatedRoute } from '@angular/router';
import { MedicalRecord } from "../models/medical-record.model";
import { MedicalRecordRepository } from "../models/medical-record.repository";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  @Input() title?: string;
  editing: boolean = false;
  _medicalRecord: MedicalRecord = new MedicalRecord();

  sideTitles = [
    "Account Information",
    "Medical Record",
    "Add Medical Record",
  ]
  constructor(private repository: MedicalRecordRepository,public auth: AuthService,private activeRoute: ActivatedRoute) { }


  async ngOnInit(): Promise<void> {
    await this.repository.setMedicalRecord();

    this.editing = this.activeRoute.snapshot.params["mode"] === "edit";

    // Edit
    if (this.editing) {
      this._medicalRecord = this.repository.getItem(this.activeRoute.snapshot.params["id"]);
    }
  }

}
