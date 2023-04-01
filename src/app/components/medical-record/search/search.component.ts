import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MedicalRecord } from "src/app/models/medical-record.model";
import { MedicalRecordRepository } from "src/app/models/medical-record.repository";
import { isNotEmpty } from "src/app/utils";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class MedicalRecordSearchComponent implements OnInit {
  searchQuery: string;
  searchFilters: object = { email: "Email", phoneNumber: "Phone Number" };
  searchFilter: string = Object.keys(this.searchFilters)[0];
  isSubmitted: boolean;
  patientName: string;

  constructor(private repository: MedicalRecordRepository) {}

  ngOnInit(): void {
    this.repository.setEmptyMedicalRecord();
  }

  //CHECK SEARCH FIELD IF EMPTY
  get isSearchValid(): boolean {
    return isNotEmpty(this.searchQuery);
  }

  async submit(form: NgForm): Promise<void> {
    this.isSubmitted = true;
    if (!form.valid) return;
    await this.repository.setSearchedMedicalRecord(
      this.searchFilter,
      this.searchQuery
    );
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
