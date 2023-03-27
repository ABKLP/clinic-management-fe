import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MedicalRecordRepository } from '../models/medical-record.repository';
import { MedicalRecord } from '../models/medical-record.model';
import { AuthService } from '../models/auth.service';
import { ActivatedRoute } from '@angular/router';
import { UserRepository } from '../models/user.repository';
import { RestDataSource } from '../models/rest.datasource';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  inputValue1 = '';
  inputValue2 = true;
  data: any;

  constructor(private dataSource: RestDataSource) { }
  
  
  searchData() {
    this.dataSource.getUser().subscribe((data) => {
      this.data = data;
    });
  }
 
  
  async ngOnInit(): Promise<void> {
  }
  
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
