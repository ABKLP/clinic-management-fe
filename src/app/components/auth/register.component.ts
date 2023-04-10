import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/models/auth.service";
import { User } from "src/app/models/user.model";
import { ToastService } from "src/app/services/toast.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./auth.component.scss"],
})
export class RegisterComponent implements OnInit {
  public user: User = new User();
  public message: string;
  isPasswordVisible: boolean = false;

  constructor(
    private router: Router,
    private auth: AuthService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {}

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
          this.toast.show(response.message, {
            className: "bg-success text-light",
            delay: 10000,
          });
          this.router.navigate(["user", "profile"]);
        }
      });
    } else {
      this.toast.show("Invalid Form Data", {
        className: "bg-danger text-light",
        delay: 15000,
      });
    }
  }
}
