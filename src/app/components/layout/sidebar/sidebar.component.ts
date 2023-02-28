import { Component, Input, OnInit } from "@angular/core";
import { AuthService } from "src/app/models/auth.service";
import { UserModule } from "../../user/user.module";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  @Input() title?: string;


  sideTitles = [
    "Patient Overview",
    "Medical History",
  ]
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
