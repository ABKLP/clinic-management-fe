import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/models/auth.service";
import { User } from "src/app/models/user.model";
import { UserRepository } from "src/app/models/user.repository";

@Component({
  selector: "app-user-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class UserProfileComponent implements OnInit {
  public user: User;
  public message: string;
  isPasswordVisible: boolean = false;
  isEditing: boolean = false;

  constructor(public repository: UserRepository, 
    private router: Router,
    private auth: AuthService
    ) {
    this.repository.setUser();
  }

  ngOnInit(): void {}

  get profileReady(): boolean {
    return this.repository.profileReady;
  }

  get userProfile(): User {
    this.user = this.repository.getUser;
    return this.user;
  }

  get passwordType(): string {
    return this.isPasswordVisible ? "text" : "password";
  }

  togglePassword() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  toggleEditMode() {
    this.isEditing = !this.isEditing;
  }

  save(form: NgForm) {
    this.repository.saveUser(this.user);
    this.router.navigateByUrl("/user/profile");
    this.toggleEditMode();
  }

  get isPatient(): boolean {
    return this.auth.userRole === "patient" ? true : false;
  }
}
