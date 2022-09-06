import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/models/dialog-data';
import { AlimentosService } from 'src/app/shared/services/alimentos.service';
import { DatabaseService } from 'src/app/shared/services/database.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  displayedColumns: string[] = ['alimento', 'quantidade', 'calorias'];

  public dataSource: any;

  clickedRows = new Set<any>();

  public alimento: string;
  public quantidade: string;
  public listDeAlimentos = new Array<any>();

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private alimentoService: AlimentosService,
    private dataBaseService: DatabaseService
  ) { }



  closeDialog() {
    this.dialogRef.close();
  }

  salvarEvento(value: any) {
    console.log('Salvar evento', value);
  }

  buscarAlimento() {
    this.dataBaseService.getFoodByName(this.alimento)
      .subscribe((r: any) => {
        console.log(r);
        this.dataSource = r;
      }, (err: any) => {
        console.log('erro')
      })
  }


  clicked(row: any) {
    this.clickedRows.has(row) ? this.clickedRows.delete(row) : this.clickedRows.add(row);
  }

}
