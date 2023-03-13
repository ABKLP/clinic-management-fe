import { Injectable } from "@angular/core";
import { ResponseModel } from "./response.model";
import { RestDataSource } from "./rest.datasource";
import { MedicalRecordList } from "./medical-record.model";

@Injectable()
export class MedicalRecordRepository {
  private _medicalRecordList: MedicalRecordList[] = [];
  listReady: boolean = false;

  constructor(private dataSource: RestDataSource) { }

  getMedicalRecordList(): MedicalRecordList[] {
    return this._medicalRecordList;
  }

  async setMedicalRecordList() {
    this.listReady = false;
    this._medicalRecordList = await this.dataSource.getMedicalRecordList().toPromise();
    this.listReady = true;
  }

  getItem(id: string): MedicalRecordList {
    return { ...this._medicalRecordList.find((trn) => trn._id === id)! };
  }

  async saveMedicalRecordList(item: MedicalRecordList) {
    // If it does not have id, then create a new item
    if (item._id === null || item._id === "" || item._id === undefined) {
      const response = await this.dataSource.insertMedicalRecordList(item).toPromise();
      if (response._id) {
        this._medicalRecordList.push(response);
      } else {
        const error = response as ResponseModel;
        alert(`Error: ${error.message}`);
      }
    } else {
      const response: ResponseModel = await this.dataSource.updateMedicalRecordList(item).toPromise();
      if (response.success === true) {
        this._medicalRecordList.splice(
          this._medicalRecordList.findIndex((trn) => trn._id === item._id),
          1,
          item
        );
      } else {
        alert(`Error: ${response.message}`);
      }
    }
  }

  deleteMedicalRecordList(id: string) {
    this.dataSource.deleteMedicalRecordList(id).subscribe((response) => {
      if (response.success) {
        this._medicalRecordList.splice(
          this._medicalRecordList.findIndex((trn) => trn._id === id),
          1
        );
      } else {
        alert(`Error: ${response.message}`);
      }
    });
  }
}
