import { Component, OnInit } from "@angular/core";
import { MedicalRecord } from "src/app/models/medical-record.model";
import { MedicalRecordRepository } from "src/app/models/medical-record.repository";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"],
})
export class IndexComponent implements OnInit {
  title = "Home";
  completed: boolean = false;

  //constructor(){}
  constructor(private repository: MedicalRecordRepository) {
  }

  async ngOnInit(): Promise<void> {}

  get medicalRecord(): MedicalRecord[] {
    return this.repository.getMedicalRecord().filter(
      (t) =>
      t.recordedDate !==null
    );
  }
}
