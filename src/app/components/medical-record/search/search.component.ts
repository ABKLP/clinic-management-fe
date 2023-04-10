import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MedicalRecord } from "src/app/models/medical-record.model";
import { MedicalRecordRepository } from "src/app/models/medical-record.repository";
import { toDateString } from "src/app/utils";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class MedicalRecordSearchComponent implements OnInit {
  searchQuery: string;
  searchFilters: object = { email: "Email", phoneNumber: "Phone Number" };
  searchFilter: string = Object.keys(this.searchFilters)[0];
  patientName: string;

  constructor(private repository: MedicalRecordRepository) {}

  ngOnInit(): void {
    this.repository.setEmptyMedicalRecord();
  }

  toDateString(value: any) {
    return toDateString(value);
  }

  async submit(form: NgForm): Promise<void> {
    if (!form.valid) return;
    await this.repository.setSearchedMedicalRecord(
      this.searchFilter,
      this.searchQuery
    );
    let firstItem = this.medicalRecord[0].owner;
    this.patientName = firstItem.fullName;
  }

  get medicalRecord(): MedicalRecord[] {
    return this.repository.getMedicalRecord();
  }

  deleteMethod(id: string) {
    if (confirm("Are you sure?")) {
      this.repository.deleteMedicalRecord(id);
    }
  }
}
