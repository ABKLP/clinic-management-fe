import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.scss"],
})
export class PaginationComponent implements OnInit {
  @Input() currentPage: number;
  @Input() totalPage: number;
  @Output() pageChanged = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  get totalPages(): number[] {
    return Array.from({ length: this.totalPage }, (_, index) => index + 1);
  }

  loadNextPage() {
    if (this.currentPage < this.totalPage) {
      this.pageChanged.emit(this.currentPage + 1);
    }
  }

  loadPrevPage() {
    if (this.currentPage > 1) {
      this.pageChanged.emit(this.currentPage - 1);
    }
  }

  goToPage(page: number) {
    this.pageChanged.emit(page);
  }
}
