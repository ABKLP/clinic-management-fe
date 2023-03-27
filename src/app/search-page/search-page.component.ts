import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MedicalRecordRepository } from '../models/medical-record.repository';
import { MedicalRecord } from '../models/medical-record.model';
import { AuthService } from '../models/auth.service';
import { ActivatedRoute } from '@angular/router';
import { RestDataSource } from '../models/rest.datasource';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  searching: boolean = false;
  searchText =""
  searchData2: string
  
  constructor(
    private repository : MedicalRecordRepository,
    private activeRoute : ActivatedRoute,
    private auth: AuthService,
    private rest: RestDataSource
  ) { }
  
  data = {
    name: 'searchPage',
  }

  async ngOnInit(): Promise<void> {
    //await this.repository.setMedicalRecord();
  }

  // get medicalRecord(): MedicalRecord[] {
  //   return this.repository.getMedicalRecord().filter(t => t.owner.id === this.auth.userId);
  // }
 
  async save(form: NgForm) {
    // this.isSubmitted = true;
    // // TODO: add validations to the form
    // if (this.isDoctorValid && this.isRecordDateValid) {
    //   if (!this.editing) {
    //     this._medicalRecord.owner = this.auth.userId;
    //   }

    //   await this.repository.saveMedicalRecord(this._medicalRecord);
    //   this.router.navigateByUrl("/medical-record/list");
    // }
  }
}
