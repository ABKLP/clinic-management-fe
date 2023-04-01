export class MedicalRecord {
  constructor(
    public _id?: string,
    public diagnostic?: string,
    public medicine?: string,
    public owner?: any, // TODO: assign proper type
    public createdAt?: string
  ) {}
}
