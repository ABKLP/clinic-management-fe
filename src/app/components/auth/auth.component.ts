import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/models/auth.service";
import { ToastService } from "src/app/services/toast.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"],
})
export class AuthComponent implements OnInit {
  public username: string;
  public password: string;
  public message: string;
  isPasswordVisible: boolean = false;

  constructor(
    private router: Router,
    private auth: AuthService,
    private toast: ToastService
  ) {}

  ngOnInit() {}

  get passwordType(): string {
    return this.isPasswordVisible ? "text" : "password";
  }

  togglePassword() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  get defaultRedirectUrl(): string[] {
    return this.auth.userRole === "patient"
      ? ["user", "profile"]
      : ["employee", "profile"];
  }

  authenticate(form: NgForm) {
    if (form.valid) {
      // perform authentication
      this.auth
        .authenticate(this.username, this.password)
        .subscribe((response) => {
          if (response.success) {
            this.toast.show("Signed In Successfully", {
              className: "bg-success text-light",
              delay: 10000,
            });
            this.router.navigate(this.defaultRedirectUrl);
          } else {
            this.toast.show(response.message, {
              className: "bg-danger text-light",
              delay: 15000,
            });
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
