import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { ResponseModel } from "./response.model";
import { User } from "./user.model";
import { environment } from "src/environments/environment";
import { MedicalRecordList } from "./medical-record.model";

@Injectable()
export class RestDataSource {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiURL;
  }

  get authToken(): string | null {
    return sessionStorage.getItem("authToken");
  }

  set authToken(value: string | null) {
    sessionStorage.setItem("authToken", value);
  }

  // Authentication APIs
  authenticate(user: string, pass: string): Observable<ResponseModel> {
    return this.http
      .post<any>(`${this.baseUrl}/users/signin`, {
        username: user,
        password: pass,
      })
      .pipe(
        map((response) => {
          this.authToken = response.success ? response.token : null;
          return response;
        }),
        catchError((error) => {
          return of(error.error);
        })
      );
  }

  signup(user: User): Observable<ResponseModel> {
    return this.http
      .post<ResponseModel>(`${this.baseUrl}/users/signup`, user)
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((error) => {
          return of(error.error);
        })
      );
  }

  getUserList(): Observable<User[]> {
    return this.http.get<User[]>(
      `${this.baseUrl}/users/list`,
      this.provideToken()
    );
  }

  getUser(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/me`, this.provideToken());
  }

  updateUser(user: User): Observable<ResponseModel> {
    return this.http
      .put<ResponseModel>(
        `${this.baseUrl}/users/edit/${user._id}`,
        user,
        this.provideToken()
      )
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((error) => {
          return of(error.error);
        })
      );
  }

  private provideToken() {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.authToken}`,
      }),
    };
  }

  // Tournament APIs
  getMedicalRecordList(): Observable<MedicalRecordList[]> {
    return this.http.get<MedicalRecordList[]>(`${this.baseUrl}/medical-record/list`);
  }

  insertMedicalRecordList(item: MedicalRecordList): Observable<MedicalRecordList> {
    return this.http
      .post<MedicalRecordList>(`${this.baseUrl}/medical-record/add`, item, this.provideToken())
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((error) => {
          console.error(error.error);
          return of(error.error);
        })
      );
  }

  updateMedicalRecordList(item: MedicalRecordList): Observable<ResponseModel> {
    return this.http
      .put<ResponseModel>(
        `${this.baseUrl}/medical-record/edit/${item._id}`,
        item,
        this.provideToken()
      )
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((error) => {
          console.error(error.error);
          return of(error.error);
        })
      );
  }

  deleteMedicalRecordList(id: string): Observable<ResponseModel> {
    return this.http
      .delete<ResponseModel>(
        `${this.baseUrl}/medical-record/delete/${id}`,
        this.provideToken()
      )
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((error) => {
          console.error(error.error);
          return of(error.error);
        })
      );
  }

}
