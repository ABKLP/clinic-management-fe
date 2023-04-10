import { Component, OnInit } from "@angular/core";
import { Appointment } from "src/app/models/appointment.model";
import { AppointmentRepository } from "src/app/models/appointment.repository";
import { AuthService } from "src/app/models/auth.service";
import { toCapitalize, toLocaleString } from "src/app/utils";

@Component({
  selector: "app-appointment-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class AppointmentListComponent implements OnInit {
  title = "Appointment List";

  constructor(
    private auth: AuthService,
    private repository: AppointmentRepository
  ) {}

  async ngOnInit(): Promise<void> {
    if (this.auth.userRole === "patient") {
      await this.repository.setAppointments(this.auth.userId);
    } else {
      await this.repository.setAppointments();
    }
  }

  get isEmployee(): boolean {
    return ["admin", "doctor", "nurse"].includes(this.auth.userRole);
  }

  get appointmentList(): Appointment[] {
    return this.repository.getAppointments();
  }

  get isReady(): boolean {
    return this.repository.listReady;
  }

  toCapitalize(value: any) {
    return toCapitalize(value);
  }

  toLocaleString(value: any) {
    return toLocaleString(value);
  }

  cancelMethod(item: Appointment) {
    if (confirm("Are you sure?")) {
      this.repository.cancelAppointment(item);
    }
  }

  deleteMethod(id: string) {
    if (confirm("Are you sure?")) {
      this.repository.deleteAppointment(id);
    }
  }
}
