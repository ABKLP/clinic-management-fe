export class MedicalRecord {
  constructor(
    public _id?: string,
    public diagnostic?: string,
    public medicine?: string,
    public patient?: any, // TODO: assign proper type
    public doctor?: any, // TODO: assign proper type
    public createdAt?: string
  ) {}
}
