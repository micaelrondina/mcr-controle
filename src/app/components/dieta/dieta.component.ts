import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';


export interface PeriodicElement {
  alimento: string;
  carboidrato: string;
  proteina: string;
  gordura: string;
  total: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  { alimento: 'Ovo', carboidrato: '1.0079', proteina: 'H', gordura: '30', total: '1300' },
  { alimento: 'Batata Doce', carboidrato: '4.0026', proteina: 'He', gordura: '30', total: '1300' },
];


@Component({
  selector: 'app-dieta',
  templateUrl: './dieta.component.html',
  styleUrls: ['./dieta.component.css']
})
export class DietaComponent implements OnInit {

  animal: string;
  name: string;


  displayedColumns: string[] = ['alimento', 'carbo', 'prot', 'gord', 'total'];
  dataSource = ELEMENT_DATA;

  constructor(
    public dialog: MatDialog) { }

  relatorios: any;
  ngOnInit() {
    this.relatorios = [{
      idReal: 1,
      nomeRelat:
        'Download'
    }]
  }

  downloadFile() {

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      // width: '1024px',
      // height: '800px',
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}


