import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-rel-event-1386',
    templateUrl: './rel-event-386.component.html',
    styleUrls: ['./rel-event-386.component.css']
})
export class RelEvent1386Component implements OnInit, OnDestroy {
    relatorios = null;
    temArquivos: boolean = false;
    private sub: Subscription[] = [];

    constructor() { }

    ngOnInit() {

    }

    ngOnDestroy() {
        this.sub.forEach(s => s.unsubscribe());
    }

    downloadFile(idRel: number) {

    }
}
