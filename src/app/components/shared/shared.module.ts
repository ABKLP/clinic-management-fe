import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgbToastModule } from "@ng-bootstrap/ng-bootstrap";

import { FeedbackComponent } from "./feedback";
import { LoadingComponent, NoRecordComponent } from "./placeholder";
import { PaginationComponent } from "./pagination";
import { ToastsComponent } from "./toasts/toasts.component";

@NgModule({
  imports: [CommonModule, RouterModule, NgbToastModule],
  declarations: [
    FeedbackComponent,
    NoRecordComponent,
    LoadingComponent,
    PaginationComponent,
    ToastsComponent,
  ],
  exports: [
    FeedbackComponent,
    NoRecordComponent,
    LoadingComponent,
    PaginationComponent,
    ToastsComponent,
  ],
})
export class SharedModule {}
