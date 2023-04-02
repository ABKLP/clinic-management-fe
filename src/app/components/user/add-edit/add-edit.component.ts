import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/models/auth.service";
import { User } from "src/app/models/user.model";
import { UserRepository } from "src/app/models/user.repository";

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
    private auth: AuthService,
    private activeRoute: ActivatedRoute,
    private repository: UserRepository,
    private router: Router
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
      // this.user = this.repository.getUser(
      //   this.activeRoute.snapshot.params["id"]
      // );
      this.user = this.repository.getUser;
    }
  }

  get passwordType(): string {
    return this.isPasswordVisible ? "text" : "password";
  }

  togglePassword() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  signup(form: NgForm) {
    if (form.valid) {
      this.auth.signup(this.user).subscribe((response) => {
        console.log(response);

        if (response.success) {
          console.log(response.message);
          this.router.navigateByUrl("admin/dashboard");
        }
        this.message = response.message;
      });
    } else {
      this.message = "Invalid Form Data";
    }
  }
}
