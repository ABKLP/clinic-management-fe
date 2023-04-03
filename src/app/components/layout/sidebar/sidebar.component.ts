import { Component, Input, OnInit } from "@angular/core";
import { AuthService } from "src/app/models/auth.service";
import { ActivatedRoute } from "@angular/router";
import { MedicalRecord } from "../../../models/medical-record.model";
import { MedicalRecordRepository } from "../../../models/medical-record.repository";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  @Input() title?: string;
  editing: boolean = false;
  isEmpProfilePg: boolean = false;
  isAdminDBoard: boolean = false;

  sideTitles = ["Account Information", "Medical Record", "Add Medical Record","Search Medical Record","Schedule","User List"];

  //FOR PATIENT ONLY    [MEDICAL-RECORD]
  //FOR EMPLOYEE ONLY   [ADD MEDICAL RECORD, SEARCH MEDICAL RECORD, USER LIST]
  //FOR BOTH = [ACCOUNT INFO, SCHEDULE]

  constructor(
    public auth: AuthService,
    private activeRoute: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
    this.editing = this.activeRoute.snapshot.params["mode"] === "edit";
    this.isEmpProfilePg = this.activeRoute.snapshot.routeConfig.path === "employee/profile";
    this.isAdminDBoard = this.activeRoute.snapshot.routeConfig.path === "admin/dashboard";
    console.log("test if true profile page = " + this.isEmpProfilePg); 
  }

  get isPatient() : boolean{
    console.log("role =---- " + this.auth.userRole);
    return this.auth.userRole === "patient" ? true : false;
  }

  get isAdmin() : boolean{
    console.log("role =---- " + this.auth.userRole);
    return this.auth.userRole === "admin" ? true : false;
  }
}
