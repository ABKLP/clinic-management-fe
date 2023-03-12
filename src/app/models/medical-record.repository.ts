//import { Injectable } from "@angular/core";
import { ResponseModel } from "./response.model";
import { RestDataSource } from "./rest.datasource";
import {MedicalRecordList } from 'src/app/models/medical-record.model'; 

//@Injectable()
export class MedicalRecordRepository {
  //private _medical_record_list: MedicalRecordList[] = [];
  listReady: boolean = false;

  constructor(){}
  //constructor(private dataSource: RestDataSource) { }

  // getTournaments(): MedicalRecordList[] {
  //   return this._medical_record_list;
  // }

  // async setTournaments() {
  //   this.listReady = false;
  //   this._medical_record_list = await this.dataSource.getMedicalRecordList().toPromise();
  //   this.listReady = true;
  // }

  // getItem(id: string): MedicalRecordList {
  //   return { ...this._medical_record_list.find((trn) => trn._id === id)! };
  // }

  // async saveTournament(item: MedicalRecordList) {
  //   // If it does not have id, then create a new item
  //   if (item._id === null || item._id === "" || item._id === undefined) {
  //     const response = await this.dataSource.insertMedicalRecordList(item).toPromise();
  //     if (response._id) {
  //       this._medical_record_list.push(response);
  //     } else {
  //       const error = response as ResponseModel;
  //       alert(`Error: ${error.message}`);
  //     }
  //   } else {
  //     const response: ResponseModel = await this.dataSource.updateMedicalRecordList(item).toPromise();
  //     if (response.success === true) {
  //       this._medical_record_list.splice(
  //         this._medical_record_list.findIndex((trn) => trn._id === item._id),
  //         1,
  //         item
  //       );
  //     } else {
  //       alert(`Error: ${response.message}`);
  //     }
  //   }
  // }

  // deleteTournament(id: string) {
  //   this.dataSource.deleteMedicalRecordList(id).subscribe((response) => {
  //     if (response.success) {
  //       this._medical_record_list.splice(
  //         this._medical_record_list.findIndex((trn) => trn._id === id),
  //         1
  //       );
  //     } else {
  //       alert(`Error: ${response.message}`);
  //     }
  //   });
  // }
}
