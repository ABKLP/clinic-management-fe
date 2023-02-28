


export class MedicalList {
  constructor(
    public _id?: string,
    public name?: string,
    public description?: string,
    public participants: Participant[] = [],
    public rounds: Round = {} as Round,
    public startedAt?: string,
    public owner?: any, // TODO: assign proper type
    public createdAt: number = Date.now(),
    public completed: boolean = false,
    public deleted: boolean = false
  ) { }
}