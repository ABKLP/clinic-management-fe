import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/models/auth.service";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"],
})
export class IndexComponent implements OnInit {
  title = "Home";
  completed: boolean = false;

  constructor(public auth: AuthService) {}

  async ngOnInit(): Promise<void> {}
}
