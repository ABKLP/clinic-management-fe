import { Component, OnInit } from "@angular/core";
import { MedicalRecordList } from "src/app/models/medical-record.model";
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

  get tournamentList(): MedicalRecordList[] {
    return this.repository.getMedicalRecordList().filter(
      (t) =>
      t.recordedDate !==null
    );
  }
}
