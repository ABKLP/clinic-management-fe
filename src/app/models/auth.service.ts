import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ResponseModel } from "./response.model";
import { RestDataSource } from "./rest.datasource";
import { User } from "./user.model";

@Injectable()
export class AuthService {
  private _redirectUrl: string;

  constructor(
    private dataSource: RestDataSource
  ) {}

  get userId(): string | null {
    return sessionStorage.getItem("userId");
  }

  set userId(value: string | null) {
    sessionStorage.setItem("userId", value);
  }

  get username(): string | null {
    return sessionStorage.getItem("username");
  }

  set username(value: string | null) {
    sessionStorage.setItem("username", value);
  }

  get userRole(): string | null {
    try {
      const {
        payload: { role },
      } = JSON.parse(window.atob(this.dataSource.authToken.split(".")[1]));
      return role;
    } catch (error) {
      console.error(error);
      return "";
    }
  }

  signup(user: User): Observable<ResponseModel> {
    return this.dataSource.signup(user).pipe(
      map((response) => {
        if (response.success) {
          this.getUser();
        }
        return response;
      })
    );
  }

  authenticate(username: string, password: string): Observable<ResponseModel> {
    return this.dataSource.authenticate(username, password).pipe(
      map((response) => {
        if (response.success) {
          this.getUser();
        }
        return response;
      })
    );
  }

  getUser(): void {
    this.dataSource.getUserProfile().subscribe((response) => {
      this.userId = response._id;
      this.username = response.username;
    });
  }

  get authenticated(): boolean {
    return !["", "null", null, undefined].includes(this.dataSource.authToken);
  }

  get redirectUrl(): string {
    let result = this._redirectUrl;
    this._redirectUrl = null;
    return result;
  }

  set redirectUrl(url: string) {
    this._redirectUrl = url;
  }

  clear() {
    this.userId = null;
    this.username = null;
    this.dataSource.authToken = null;
  }
}
