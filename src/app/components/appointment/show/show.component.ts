import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Appointment } from "src/app/models/appointment.model";
import { AppointmentRepository } from "src/app/models/appointment.repository";
import { AuthService } from "src/app/models/auth.service";
import { toLocaleString } from "src/app/utils";

@Component({
  selector: "app-appointment-show",
  templateUrl: "./show.component.html",
  styleUrls: ["./show.component.scss"],
})
export class AppointmentShowComponent implements OnInit {
  appointmentId: string;
  appointment: Appointment = new Appointment();

  constructor(
    private repository: AppointmentRepository,
    private router: Router,
    private auth: AuthService,
    private activeRoute: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
    await this.repository.setAppointments();
    this.appointmentId = this.activeRoute.snapshot.params["id"];
    if (this.appointmentId) {
      this.appointment = this.repository.getAppointment(this.appointmentId);
    } else {
      this.router.navigateByUrl("/");
    }
  }

  get isOwner(): boolean {
    return (
      this.auth.authenticated &&
      this.auth.userId === this.appointment.patient?.id
    );
  }

  toLocaleString(value: any) {
    return toLocaleString(value);
  }
}
