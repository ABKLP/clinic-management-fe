import { Injectable } from "@angular/core";
import { Appointment } from "./appointment.model";
import { ResponseModel } from "./response.model";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class AppointmentRepository {
  private _appointments: Appointment[] = [];
  listReady: boolean = false;

  constructor(private dataSource: RestDataSource) {}

  getAppointments(): Appointment[] {
    return this._appointments;
  }

  async setAppointments() {
    this.listReady = false;
    this._appointments = await this.dataSource.getAppointmentList().toPromise();
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
        alert(`Error: ${error.message}`);
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
        alert(`Error: ${response.message}`);
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
      alert(`Error: ${response.message}`);
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
      alert(`Error: ${response.message}`);
    }
  }
}
