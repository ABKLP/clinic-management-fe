import { Component, OnInit, ViewChild } from "@angular/core";
import { RestDataSource } from "../models/rest.datasource";
import { MedicalRecordComponent } from "../medical-record/medical-record.component";
import { isNotEmpty } from "../utils/helper.util";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-search-page",
  templateUrl: "./search-page.component.html",
  styleUrls: ["./search-page.component.scss"],
})
export class SearchPageComponent implements OnInit {
  inputValue1 = "";
  inputValue2 = true;
  data: any;

  @ViewChild(MedicalRecordComponent) childComponent: MedicalRecordComponent;
  isSubmitted: boolean;

  reloadChildComponent() {
    this.isSearchValid;
    this.childComponent.reloadComponent();
  }

  constructor(private dataSource: RestDataSource) {}

  async ngOnInit(): Promise<void> {}

  //CHECK SEARCH FIELD IF EMPTY
  get isSearchValid(): boolean {
    return isNotEmpty(this.inputValue1);
  }

  submit(form: NgForm) {
    this.isSubmitted = true;
    if (!form.valid) {
      //alert('Please enter a value');
      return;
    }
  }
}
