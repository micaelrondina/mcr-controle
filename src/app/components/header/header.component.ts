import { Subscription } from 'rxjs';
import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

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
