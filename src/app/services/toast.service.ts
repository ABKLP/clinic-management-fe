import { Injectable } from "@angular/core";
import { ToastInfo } from "../interfaces/toast.interface";

@Injectable({ providedIn: "root" })
export class ToastService {
  toasts: ToastInfo[] = [];

  show(text: string, options: any = {}) {
    this.toasts.push({ text, ...options });
  }

  remove(toast: ToastInfo) {
    this.toasts = this.toasts.filter((t) => t != toast);
  }

  clear() {
    this.toasts.splice(0, this.toasts.length);
  }
}
