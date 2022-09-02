import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/models/dialog-data';
import { AlimentosService } from 'src/app/shared/alimentos.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  public alimento: string;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private alimentoService: AlimentosService
  ) { }



  closeDialog() {
    this.dialogRef.close();
  }

  salvarEvento(value: any) {
    console.log('Salvar evento', value);
  }

  chamarAlimento() {
    console.log(this.alimento);

    this.alimentoService.buscarAlimentos(this.alimento)
      .subscribe((r: any) => {
        console.log(r);
      }, (err: any) => {
        console.log('erro')
      })
  }

}
