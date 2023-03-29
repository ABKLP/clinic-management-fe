import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Appointment } from "src/app/models/appointment.model";
import { AppointmentRepository } from "src/app/models/appointment.repository";
import { AuthService } from "src/app/models/auth.service";
import { isNotEmpty, toTimestamp } from "src/app/utils";

@Component({
  selector: "app-appointment-add-edit",
  templateUrl: "./add-edit.component.html",
  styleUrls: ["./add-edit.component.scss"],
})
export class AppointmentAddEditComponent implements OnInit {
  title: string = "Create new Appointment";
  isSubmitted: boolean = false;
  editing: boolean = false;
  appointment: Appointment = new Appointment();

  constructor(
    private repository: AppointmentRepository,
    private router: Router,
    private auth: AuthService,
    private activeRoute: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
    await this.repository.setAppointments();

    // Delete
    if (this.activeRoute.snapshot.params["mode"] === "delete") {
      this.deleteItem(this.activeRoute.snapshot.params["id"]);
    }

    this.editing = this.activeRoute.snapshot.params["mode"] === "edit";

    // Edit
    if (this.editing) {
      this.appointment = this.repository.getAppointment(
        this.activeRoute.snapshot.params["id"]
      );
    }
  }

  get isNameValid(): boolean {
    return isNotEmpty(this.appointment.name);
  }

  get isScheduledAtValid(): boolean {
    return (
      (this.appointment.scheduledAt !== null &&
        toTimestamp(this.appointment.scheduledAt) >=
          toTimestamp(new Date().toString())) ||
      this.editing
    );
  }

  async save(form: NgForm) {
    this.isSubmitted = true;

    if (this.isNameValid && this.isScheduledAtValid) {
      if (!this.editing) {
        this.appointment.patient = this.auth.userId;
      }

      const id = await this.repository.saveAppointment(this.appointment);
      if (id) {
        this.router.navigateByUrl(`/appointments/show/${id}`);
      } else {
        this.router.navigateByUrl("/appointments/list");
      }
    }
  }

  private deleteItem(id: string) {
    this.repository.deleteAppointment(id);
    this.router.navigateByUrl("/appointments/list");
  }
}
