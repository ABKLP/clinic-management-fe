import { Component, OnInit } from '@angular/core';
import { MedicalRecordList } from '../models/medical-record.model';
import { MedicalRecordRepository } from '../models/medical-record.repository';


@Component({
  selector: 'app-medical-record-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
  title: string = "Create new Medical Record";
  editing: boolean = false;
  isSubmitted: boolean = false;
  medicalRecordList: MedicalRecordList = new MedicalRecordList();


  constructor(
    //private repository: MedicalRecordRepository,
    // private router: Router,
    // private auth: AuthService,
    // private activeRoute: ActivatedRoute
  ) {
  }

  // get isNameValid(): boolean {
  //   return isNotEmpty(this.medicalRecordList.doctorName);
  // }


  // async save(form: NgForm) {
  //   this.isSubmitted = true;
  //   // TODO: add validations to the form

  //     // if (!this.editing) {
  //     //   this.medicalRecordList.owner = this.auth.userId;
  //     //   this.medicalRecordList.deleted = false;
  //     //   this.medicalRecordList.createdAt = Date.now();
  //     // }
  //     // this.#generateTournament();
  //     await this.repository.saveTournament(this.medicalRecordList);
  //     this.router.navigateByUrl("/medical-record/list");
    
  // }



  ngOnInit(): void {
  }

}
