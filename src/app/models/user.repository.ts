import { Injectable } from "@angular/core";
import { ResponseModel } from "./response.model";
import { RestDataSource } from "./rest.datasource";
import { User } from "./user.model";

@Injectable()
export class UserRepository {
  private _users: User[] = [];
  private user: User = new User();
  page: number = 1;
  limit: number = 10;
  nextPage: number;
  prevPage: number;
  totalPage: number;
  listReady: boolean = false;
  profileReady: boolean = false;

  constructor(private dataSource: RestDataSource) {}

  getUsers(): User[] {
    return this._users;
  }

  async setUsers() {
    this.listReady = false;
    this.dataSource.getUserList(this.page, this.limit).subscribe((response) => {
      this._users = response.data;
      this.page = response.page;
      this.limit = response.limit;
      this.nextPage = response.nextPage;
      this.prevPage = response.prevPage;
      this.totalPage = response.totalPage;
    });
    this.listReady = true;
  }

  get getUser(): User {
    return this.user;
  }

  setUser() {
    this.profileReady = false;
    this.dataSource.getUser().subscribe((data) => {
      this.user = data;
      this.profileReady = true;
    });
  }

  async saveUser(user: User) {
    this.dataSource.updateUser(user).subscribe((resp) => {
      const response = resp as ResponseModel;
      if (response.success) {
        response.message;
      } else {
        alert(`Error: ${response.message}`);
      }
    });
  }
}
