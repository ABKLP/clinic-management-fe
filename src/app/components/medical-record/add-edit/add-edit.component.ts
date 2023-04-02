import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  Observable,
  tap,
} from "rxjs";
import { MedicalRecord } from "src/app/models/medical-record.model";
import { User } from "src/app/models/user.model";
import { MedicalRecordRepository } from "src/app/models/medical-record.repository";
import { UserRepository } from "src/app/models/user.repository";
import { isNotEmpty } from "src/app/utils";

@Component({
  selector: "app-medical-record-add-edit",
  templateUrl: "./add-edit.component.html",
  styleUrls: ["./add-edit.component.scss"],
})
export class MedicalRecordAddEditComponent implements OnInit {
  title: string = "Create new Medical Record";
  isSubmitted: boolean = false;
  editing: boolean = false;
  _medicalRecord: MedicalRecord = new MedicalRecord();
  isSearching: boolean = false;
  selectedPatient: string = "";

  constructor(
    private medicalRecordRepository: MedicalRecordRepository,
    private userRepository: UserRepository,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
    await this.medicalRecordRepository.setMedicalRecord();

    // Delete
    if (this.activeRoute.snapshot.params["mode"] === "delete") {
      this.deleteItem(this.activeRoute.snapshot.params["id"]);
    }

    this.editing = this.activeRoute.snapshot.params["mode"] === "edit";

    // Edit
    if (this.editing) {
      this._medicalRecord = this.medicalRecordRepository.getItem(
        this.activeRoute.snapshot.params["id"]
      );
    }
  }

  private deleteItem(id: string) {
    this.medicalRecordRepository.deleteMedicalRecord(id);
    this.router.navigateByUrl("/medical-record/list");
  }

  async save(form: NgForm) {
    this.isSubmitted = true;
    // TODO: add validations to the form
    if (this.isFindingsValid && this.isMedicationValid) {
      await this.medicalRecordRepository.saveMedicalRecord(this._medicalRecord);
      this.router.navigateByUrl("/medical-record/list");
    }
  }

  //CHECK FINDING FIELD IF EMPTY
  get isFindingsValid(): boolean {
    return isNotEmpty(this._medicalRecord.diagnostic);
  }

  //CHECK MEDICATION FIELD IF EMPTY
  get isMedicationValid(): boolean {
    return isNotEmpty(this._medicalRecord.medicine);
  }

  get userList(): User[] {
    return this.userRepository.getUsers();
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      filter((term) => term.length > 2),
      tap(() => (this.isSearching = true)),
      tap(async (term) => {
        await this.userRepository.setSearchedUsers(term);
      }),
      map(() => this.userList),
      tap(() => (this.isSearching = false))
    );

  userFormatter(result: User) {
    return result.fullName;
  }

  onPatientSelected(event: any) {
    this._medicalRecord.owner = event.item.id;
  }
}
