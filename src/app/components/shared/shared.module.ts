import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { FeedbackComponent } from "./feedback";
import { LoadingComponent, NoRecordComponent } from "./placeholder";
import { PaginationComponent } from "./pagination";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    FeedbackComponent,
    NoRecordComponent,
    LoadingComponent,
    PaginationComponent,
  ],
  exports: [
    FeedbackComponent,
    NoRecordComponent,
    LoadingComponent,
    PaginationComponent,
  ],
})
export class SharedModule {}
