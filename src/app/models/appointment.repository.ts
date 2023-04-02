import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { ToastService } from "../services/toast.service";
import { Appointment } from "./appointment.model";
import { ResponseModel } from "./response.model";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class AppointmentRepository {
  private _appointments: Appointment[] = [];
  listReady: boolean = false;

  constructor(
    private dataSource: RestDataSource,
    private toast: ToastService
  ) {}

  getAppointments(): Appointment[] {
    return this._appointments;
  }

  async setAppointments(userId?: string) {
    this.listReady = false;
    this._appointments = await lastValueFrom(
      this.dataSource.getAppointmentList(userId)
    );
    this.listReady = true;
  }

  getAppointment(id: string): Appointment {
    return { ...this._appointments.find((appt) => appt._id === id) };
  }

  async saveAppointment(item: Appointment) {
    if (["", null, undefined].includes(item._id)) {
      const response = await this.dataSource
        .insertAppointment(item)
        .toPromise();
      if (response._id) {
        this._appointments.push(response);
        item._id = response._id;
      } else {
        const error = response as ResponseModel;
        this.toast.show(error.message, {
          className: "bg-danger text-light",
          delay: 15000,
        });
      }
    } else {
      const response: ResponseModel = await this.dataSource
        .updateAppointment(item)
        .toPromise();
      if (response.success) {
        this._appointments.splice(
          this._appointments.findIndex((appt) => appt._id === item._id),
          1,
          item
        );
      } else {
        this.toast.show(response.message, {
          className: "bg-danger text-light",
          delay: 15000,
        });
      }
    }

    return item._id;
  }

  async cancelAppointment(item: Appointment) {
    const response: ResponseModel = await this.dataSource
      .cancelAppointment(item)
      .toPromise();
    if (response.success) {
      item.status = "cancelled";
      this._appointments.splice(
        this._appointments.findIndex((appt) => appt._id === item._id),
        1,
        item
      );
    } else {
      this.toast.show(response.message, {
        className: "bg-danger text-light",
        delay: 15000,
      });
    }
  }

  async deleteAppointment(id: string) {
    const response: ResponseModel = await this.dataSource
      .deleteAppointment(id)
      .toPromise();
    if (response.success) {
      this._appointments.splice(
        this._appointments.findIndex((appt) => appt._id === id),
        1
      );
    } else {
      this.toast.show(response.message, {
        className: "bg-danger text-light",
        delay: 15000,
      });
    }
  }
}
