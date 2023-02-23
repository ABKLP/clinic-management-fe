import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { FeedbackComponent } from "./feedback";
import { LoadingComponent, NoRecordComponent } from "./placeholder";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [FeedbackComponent, NoRecordComponent, LoadingComponent],
  exports: [FeedbackComponent, NoRecordComponent, LoadingComponent],
})
export class SharedModule {}
