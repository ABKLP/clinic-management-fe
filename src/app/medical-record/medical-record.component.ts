import { Component, OnInit,Input} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "../models/auth.service";
import { MedicalRecord } from "../models/medical-record.model";
import { MedicalRecordRepository } from "../models/medical-record.repository";
import { SharedModule } from "../components/shared/shared.module";

@Component({
  selector: 'app-medical-record',
  templateUrl:'./medical-record.component.html',
  styleUrls: ['./medical-record.component.scss']
})
export class MedicalRecordComponent implements OnInit {
  @Input() data: string = "this is default MD_record"

  title = "Medical Record";
  isMedicalRecord: boolean = true;
  searchPerson: string

  constructor(
    private repository: MedicalRecordRepository,
    private auth: AuthService,
    private activeRoute: ActivatedRoute
  ) {
  }

  async ngOnInit(): Promise<void> {
    await this.repository.setMedicalRecord();
    if(this.data === "Hello from SearchPage")
    {
      this.isMedicalRecord = false;
    }
  }

  

  // IF searching===true
  // t.owner.id === searchPerson
  // else
  // t.owner.id === this.auth.userId
  get medicalRecord(): MedicalRecord[] {
    return this.repository.getMedicalRecord().filter(t => t.owner.id === this.auth.userId);
  }

  deleteMethod(id: string) {
    if (confirm("Are you sure?")) {
      this.repository.deleteMedicalRecord(id);
    }
  }

}