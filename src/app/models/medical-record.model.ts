export class MedicalRecordList {
  constructor(
    public _id?: string,
    public findings?: string,
    public medicine?: string,
    public recordedDate?: string,
    public doctorName?: string,
    public owner?: any, // TODO: assign proper type
  ) { }
}