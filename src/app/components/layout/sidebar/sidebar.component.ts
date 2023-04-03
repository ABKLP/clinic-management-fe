import { Component, Input, OnInit } from "@angular/core";
import { AuthService } from "src/app/models/auth.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  @Input() title?: string;
  editing: boolean = false;
  isEmpProfilePg: boolean = false;

  sideTitles = [
    "Account Information",
    "Medical Record",
    "Add Medical Record",
    "Search Medical Record",
    "Schedule",
    "User List",
  ];

  //FOR PATIENT ONLY    [MEDICAL-RECORD]
  //FOR EMPLOYEE ONLY   [ADD MEDICAL RECORD, SEARCH MEDICAL RECORD, USER LIST]
  //FOR BOTH = [ACCOUNT INFO, SCHEDULE]

  constructor(public auth: AuthService, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.editing = this.activeRoute.snapshot.params["mode"] === "edit";
    this.isEmpProfilePg =
      this.activeRoute.snapshot.routeConfig.path === "employee/profile";
  }

  get isPatient(): boolean {
    return this.auth.userRole === "patient";
  }

  get isAdmin(): boolean {
    return this.auth.userRole === "admin";
  }
}
