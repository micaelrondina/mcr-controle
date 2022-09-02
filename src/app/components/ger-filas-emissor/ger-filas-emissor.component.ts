import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
    selector: 'app-ger-filas-emissor',
    templateUrl: './ger-filas-emissor.component.html',
    styleUrls: ['./ger-filas-emissor.component.css']
})
export class RelGerFilasEmissorComponent implements OnInit, OnDestroy {
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
