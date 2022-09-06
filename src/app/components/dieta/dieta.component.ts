import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DatabaseService } from 'src/app/shared/services/database.service';
import { DialogComponent } from '../dialog/dialog.component';


export interface PeriodicElement {
  alimento: string;
  carboidrato: string;
  proteina: string;
  gordura: string;
  total: string;
}




@Component({
  selector: 'app-dieta',
  templateUrl: './dieta.component.html',
  styleUrls: ['./dieta.component.css']
})
export class DietaComponent implements OnInit {
  public alimento: string;
  animal: string;
  name: string;

  dataSource: any

  displayedColumns: string[] = ['alimento', 'carbo', 'prot', 'gord', 'total'];

  constructor(
    public dialog: MatDialog,
    private service: DatabaseService) { }

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

    initFoods(): void {
    this.service.getFoodByName('Ovo').subscribe(
      (response: any) => {
        console.log(response);
      }
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '1024px',
      height: '800px',
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}


