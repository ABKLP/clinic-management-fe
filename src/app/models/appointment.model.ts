export class Appointment {
  constructor(
    public _id?: string,
    public purpose?: string,
    public description?: string,
    public scheduledAt?: string,
    public status?: string,
    public owner?: any
  ) {}
}
