import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "src/app/models/user.model";
import { UserRepository } from "src/app/models/user.repository";
import { ToastService } from "src/app/services/toast.service";

@Component({
  selector: "app-user-add-edit",
  templateUrl: "./add-edit.component.html",
  styleUrls: ["./add-edit.component.scss"],
})
export class UserAddEditComponent implements OnInit {
  public title: string = "Create new User";
  public message: string;
  public isSubmitted: boolean = false;
  public editing: boolean = false;
  public isPasswordVisible: boolean = false;
  public userRoles: object = {
    admin: "Administrator",
    doctor: "Doctor",
    nurse: "Nurse",
    patient: "Patient",
  };
  public user: User = new User();

  constructor(
    private activeRoute: ActivatedRoute,
    private repository: UserRepository,
    private router: Router,
    private toast: ToastService
  ) {}

  async ngOnInit(): Promise<void> {
    // await this.repository.setAppointments();

    // Delete
    if (this.activeRoute.snapshot.params["mode"] === "delete") {
      // this.deleteItem(this.activeRoute.snapshot.params["id"]);
    }

    this.editing = this.activeRoute.snapshot.params["mode"] === "edit";

    // Edit
    if (this.editing) {
      await this.repository.setUser(this.activeRoute.snapshot.params["id"]);
      this.user = this.repository.getUser;
    }
  }

  get passwordType(): string {
    return this.isPasswordVisible ? "text" : "password";
  }

  togglePassword() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  async submit(form: NgForm) {
    if (!form.valid) {
      this.toast.show("Invalid Form Data", {
        className: "bg-danger text-light",
        delay: 15000,
      });
      return;
    }

    const response = await this.repository.saveUser(this.user);
    if (response.success) {
      this.router.navigateByUrl("/dashboard/users/list");
    }
  }
}
