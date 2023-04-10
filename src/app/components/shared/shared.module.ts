import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgbModalModule, NgbToastModule } from "@ng-bootstrap/ng-bootstrap";

import { FeedbackComponent } from "./feedback";
import { LoadingComponent, NoRecordComponent } from "./placeholder";
import { PaginationComponent } from "./pagination";
import { ModalComponent } from "./modal";
import { ToastsComponent } from "./toasts/toasts.component";

@NgModule({
  imports: [CommonModule, RouterModule, NgbToastModule, NgbModalModule],
  declarations: [
    FeedbackComponent,
    NoRecordComponent,
    LoadingComponent,
    PaginationComponent,
    ModalComponent,
    ToastsComponent,
  ],
  exports: [
    FeedbackComponent,
    NoRecordComponent,
    LoadingComponent,
    PaginationComponent,
    ModalComponent,
    ToastsComponent,
  ],
})
export class SharedModule {}
