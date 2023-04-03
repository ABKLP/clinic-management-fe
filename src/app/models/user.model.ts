export class User {
  constructor(
    public _id?: string,
    public firstName?: string,
    public lastName?: string,
    public fullName?: string,
    public email?: string,
    public username?: string,
    public phoneNumber?: string,
    public password?: string,
    public role?: string
  ) {}
}
