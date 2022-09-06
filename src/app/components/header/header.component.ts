import { SharedService } from './../../shared/services/shared.service';
import { Subscription } from 'rxjs';
import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    private sub: Subscription = new Subscription();

    constructor() { }

    getLoginName(): any {
      return SharedService.getInstance().loggedUser;
    }

    logoff() {
      console.log('LOGOFF')
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
