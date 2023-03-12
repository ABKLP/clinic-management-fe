import { Component, Input, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "src/app/models/user.model";
import { UserRepository } from "src/app/models/user.repository";

@Component({
  selector: 'app-medical-record',
  templateUrl: './medical-record.component.html',
  styleUrls: ['./medical-record.component.scss']
})
export class MedicalRecordComponent implements OnInit {
  public user: User;
  public message: string;
  isPasswordVisible: boolean = false;
  isEditing: boolean = false;
  @Input() title?: string;

  medicalList = [
    "Cold",
    "Fever",
  ]


  constructor(public repository: UserRepository, private router: Router) 
  {
    this.repository.setUser();
  }

  ngOnInit(): void { }

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
}
