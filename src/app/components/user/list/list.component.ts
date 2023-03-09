import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/models/auth.service";
import { User } from "src/app/models/user.model";
import { UserRepository } from "src/app/models/user.repository";

@Component({
  selector: "app-user-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class UserListComponent implements OnInit {
  title = "User List";

  constructor(
    private repository: UserRepository,
    private auth: AuthService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    await this.repository.setUsers();
  }

  get userList(): User[] {
    return this.repository.getUsers();
  }

  get isReady(): boolean {
    return this.repository.listReady;
  }

  toCapitalize(text: string) {
    return `${text[0].toUpperCase()}${text.slice(1)}`;
  }
}
