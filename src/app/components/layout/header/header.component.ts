import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AuthService } from "src/app/models/auth.service";
import { ModalComponent } from "../../shared/modal";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Input() title?: string;

  constructor(
    public auth: AuthService,
    private router: Router,
    private _modalService: NgbModal
  ) {}

  ngOnInit(): void {}

  logout() {
    const modalRef = this._modalService.open(ModalComponent);
    // modalRef.componentInstance.name = "World";
    modalRef.result.then(
      (result) => {
        // Handle the result here
        console.log(`Modal result: ${result}`);
        this.auth.clear();
        this.router.navigateByUrl("/");
      },
      (reason) => {
        // Handle the dismiss or cancel here
        console.log(`Modal dismissed with reason: ${reason}`);
      }
    );
  }

  get isPatient(): boolean {
    return this.auth.userRole === "patient";
  }
}
