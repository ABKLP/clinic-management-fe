import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { User } from "./user.model";
import { MedicalRecord } from "./medical-record.model";
import { Appointment } from "./appointment.model";
import { ResponseModel } from "./response.model";
import { PaginatedResponse } from "../interfaces/paginated.interface";
import { environment } from "src/environments/environment";

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

  // Appointment APIs
  getAppointmentList(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.baseUrl}/appointments/list`);
  }

  insertAppointment(item: Appointment): Observable<Appointment> {
    return this.http
      .post<Appointment>(
        `${this.baseUrl}/appointments/add`,
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

  updateAppointment(item: Appointment): Observable<ResponseModel> {
    return this.http
      .put<ResponseModel>(
        `${this.baseUrl}/appointments/edit/${item._id}`,
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

  cancelAppointment(item: Appointment): Observable<ResponseModel> {
    return this.http
      .put<ResponseModel>(
        `${this.baseUrl}/appointments/cancel/${item._id}`,
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

  deleteAppointment(id: string): Observable<ResponseModel> {
    return this.http
      .delete<ResponseModel>(
        `${this.baseUrl}/appointments/delete/${id}`,
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

  getUserList(
    page: number,
    limit: number
  ): Observable<PaginatedResponse<User>> {
    return this.http.get<PaginatedResponse<User>>(
      `${this.baseUrl}/users/list?page=${page}&limit=${limit}`,
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

  // Medical Record APIs
  getMedicalRecord(): Observable<MedicalRecord[]> {
    return this.http.get<MedicalRecord[]>(
      `${this.baseUrl}/medical-record/list`,
      this.provideToken()
    );
  }

  searchMedicalRecord(
    filter: string,
    query: string
  ): Observable<MedicalRecord[]> {
    return this.http.get<MedicalRecord[]>(
      `${this.baseUrl}/medical-record/search?${filter}=${query}`,
      this.provideToken()
    );
  }

  insertMedicalRecord(item: MedicalRecord): Observable<MedicalRecord> {
    return this.http
      .post<MedicalRecord>(
        `${this.baseUrl}/medical-record/add`,
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

  updateMedicalRecord(item: MedicalRecord): Observable<ResponseModel> {
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

  deleteMedicalRecord(id: string): Observable<ResponseModel> {
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

  private provideToken() {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.authToken}`,
      }),
    };
  }
}
