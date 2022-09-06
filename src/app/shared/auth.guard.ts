import { Injectable } from '@angular/core';
import { Route, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from './services/shared.service';

@Injectable()
export class AuthGuard implements CanActivate {

  public shared: SharedService;
  private expectedRole: any;

  constructor(private router: Router) {
  this.shared = SharedService.getInstance();
  }

  canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | boolean {

    //permissao necessaria para acessar
    this.expectedRole = route.data;
    if (this.expectedRole.accessRole){
      console.log(this.expectedRole.accessRole);
    }


    //se esta logado e tem a permissao de acesso
    if(this.shared.isLoggedIn() && this.shared.loggedUser.tasks.some(v => v === this.expectedRole.accessRole))
        return true;

    this.router.navigate(["/sem-acesso"]);
    return false;
  }

}
