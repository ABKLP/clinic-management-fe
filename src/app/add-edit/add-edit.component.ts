import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { hasStarted, hasValue, isNotEmpty, setTimeToZero } from 'src/app/utils';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicalRecordList } from '../models/medical-record.model';
import { AuthService } from "src/app/models/auth.service";
import { MedicalRecordRepository } from '../models/medical-record.repository';

@Component({
  selector: 'app-medical-record-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
  title: string = "Create new Medical Record";
  isSubmitted: boolean = false;
  editing: boolean = false;
  medicalRecordList: MedicalRecordList = new MedicalRecordList();
  
  //LIST OF DOCTORS IN THE HOSPITAL
  doctorList  = ["Dr.Wilson", "Dr.Reyes", "Dr.Chua"]; 

  constructor(
    private repository: MedicalRecordRepository,
    private router: Router,
    private auth: AuthService,
    private activeRoute: ActivatedRoute
  ) {
  }

  async ngOnInit(): Promise<void> {
    await this.repository.setMedicalRecordList();

    // Delete
    if (this.activeRoute.snapshot.params["mode"] === "delete") {
      this.deleteItem(this.activeRoute.snapshot.params["id"]);
    }

    this.editing = this.activeRoute.snapshot.params["mode"] === "edit";

    // Edit
    if (this.editing) {
      this.medicalRecordList = this.repository.getItem(this.activeRoute.snapshot.params["id"]);
    }
  }

  private deleteItem(id: string) {
    this.repository.deleteMedicalRecordList(id);
    this.router.navigateByUrl("/medical-record/list");
  }

  async save(form: NgForm) {
    this.isSubmitted = true;
    // TODO: add validations to the form

      // if (!this.editing) {
      //   this.medicalRecordList.owner = this.auth.userId;
      //   this.medicalRecordList.deleted = false;
      //   this.medicalRecordList.createdAt = Date.now();
      // }
      // this.#generateTournament();
      await this.repository.saveMedicalRecordList(this.medicalRecordList);
      this.router.navigateByUrl("/medical-record/list");
  }

  //CHECK FINDING FIELD IF EMPTY
  get isFindingsValid(): boolean {
    return isNotEmpty(this.medicalRecordList.findings);
  }

  //CHECK FINDING FIELD IF EMPTY
  get isMedicationValid(): boolean {
    return isNotEmpty(this.medicalRecordList.medicine);
  }

  //CHECK RECORDED DATE VALIDATION
  get isRecordDateValid(): boolean {
    return this.medicalRecordList.recordedDate !== null && (setTimeToZero(new Date(this.medicalRecordList.recordedDate + 'T10:00:00')) >= setTimeToZero(new Date()) || this.editing);
  }

  //CHECK DOCTOR VALIDATION
  get isDoctorValid(): boolean {
    return isNotEmpty(this.medicalRecordList.medicine);
  }
}
