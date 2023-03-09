import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../models/auth.service";

@Injectable({
  providedIn: "root",
})
export class EmployeePermissionGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!["admin", "doctor", "nurse"].includes(this.auth.userRole)) {
      this.auth.redirectUrl = state.url;
      this.router.navigateByUrl("access-denied");
      return false;
    }

    return true;
  }
}
