import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user.model";
import { UserRepository } from "src/app/models/user.repository";
import { toCapitalize } from "src/app/utils";

@Component({
  selector: "app-user-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class UserListComponent implements OnInit {
  title: string = "User List";

  constructor(private repository: UserRepository) {}

  async ngOnInit(): Promise<void> {
    await this.repository.setUsers();
  }

  get userList(): User[] {
    return this.repository.getUsers();
  }

  get isReady(): boolean {
    return this.repository.listReady;
  }

  get currentPage(): number {
    return this.repository.page;
  }

  set currentPage(page: number) {
    this.repository.page = page;
  }

  get totalPage(): number {
    return this.repository.totalPage;
  }

  toCapitalize(value: string) {
    return toCapitalize(value);
  }

  async onPageChanged(page: number) {
    this.currentPage = page;
    await this.repository.setUsers();
  }
}
