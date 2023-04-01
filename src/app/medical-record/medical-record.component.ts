import { Component, OnInit, Input } from "@angular/core";
import { AuthService } from "../models/auth.service";
import { MedicalRecord } from "../models/medical-record.model";
import { MedicalRecordRepository } from "../models/medical-record.repository";
import { User } from "../models/user.model";
import { UserRepository } from "../models/user.repository";

@Component({
  selector: "app-medical-record",
  templateUrl: "./medical-record.component.html",
  styleUrls: ["./medical-record.component.scss"],
})
export class MedicalRecordComponent implements OnInit {
  @Input() input1: string;
  @Input() input2: boolean;

  filterID: string = "default";
  isMedicalRecord: boolean = true;
  patientName: string = "";

  constructor(
    private repository: MedicalRecordRepository,
    private auth: AuthService,
    private userRep: UserRepository
  ) {}

  async ngOnInit(): Promise<void> {
    await this.repository.setMedicalRecord();
    await this.userRep.setUsers();
    this.isMedicalRecord = !this.input2;
  }

  //RELOAD VALUES WHEN CLICK BUTTON FROM SEARCH PAGE IS CLICK
  //IF INPUT1 IS NULL FILTER ID = NULL
  //IF INPUT1 IS NOT NULL RELOAD SETUSER, FINDSINGLEUSER,
  //INITIALIZE FILTER ID.
  reloadComponent() {
    if (!this.input1) {
      this.filterID = null;
      this.patientName = null;
    } else {
      this.userRep.setUsers();
      this.findUser;
      this.filterID = this.findUser._id;
      this.patientName = `${this.findUser.firstName} ${this.findUser.lastName}`;
    }
  }

  //FIND USER FROM USERS LIST USING SPECIFIC EMAIL
  //INPUT1 IS INPUT VALUE FROM INPUT FIELD FROM SEARCH PAGE
  get findUser(): User {
    console.log("-----------CHECKING = " + this.input1 + "--------");
    return this.userRep.getUsers().find((t) => t.email === this.input1);
  }

  //USE TO POPULATE MEDICAL-RECORD
  //USE BY SEARCH PAGEE IF INPUT2 IS TRUE
  //USE BY MEDICAL-RECORD IF INPUT2 IS FALSE
  get medicalRecord(): MedicalRecord[] {
    if (this.input2 === true) {
      return this.repository
        .getMedicalRecord()
        .filter((t) => t.owner.id === this.filterID);
    } else {
      return this.repository
        .getMedicalRecord()
        .filter((t) => t.owner.id === this.auth.userId);
    }
  }

  deleteMethod(id: string) {
    if (confirm("Are you sure?")) {
      this.repository.deleteMedicalRecord(id);
    }
  }
}
