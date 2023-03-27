import { Component, OnInit,Input} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "../models/auth.service";
import { MedicalRecord } from "../models/medical-record.model";
import { MedicalRecordRepository } from "../models/medical-record.repository";

@Component({
  selector: 'app-medical-record',
  templateUrl:'./medical-record.component.html',
  styleUrls: ['./medical-record.component.scss']
})
export class MedicalRecordComponent implements OnInit {
  @Input() input1: string;
  @Input() input2: boolean;

  title = "Medical Record";
  isMedicalRecord: boolean = true;

  idTest : string = "641b183d2ad690989c582cbb"

  constructor(
    private repository: MedicalRecordRepository,
    private auth: AuthService,
  ) {
  }

  async ngOnInit(): Promise<void> {
    await this.repository.setMedicalRecord();

    if(this.input2 === true)
    {
      this.isMedicalRecord = false;
    }
  }

  get medicalRecord(): MedicalRecord[] 
  {
    if(this.input2 === true)
    {
      return this.repository.getMedicalRecord().filter(t => t.owner.id === this.idTest);
    }else
    {
      return this.repository.getMedicalRecord().filter(t => t.owner.id === this.auth.userId);
    }
  }

  deleteMethod(id: string) {
    if (confirm("Are you sure?")) {
      this.repository.deleteMedicalRecord(id);
    }
  }

}