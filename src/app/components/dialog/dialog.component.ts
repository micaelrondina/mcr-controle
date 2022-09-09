import { Food } from '../../models/food';
import { Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/models/dialog-data';
import { AlimentosService } from 'src/app/shared/services/alimentos.service';
import { DatabaseService } from 'src/app/shared/services/database.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TitleStrategy } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  displayedColumns: string[] = ['alimento', 'quantidade', 'calorias'];

  public dataSource: any;

  clickedRows = new Set<any>();

  public alimento: string;
  public quantidade: string;
  public listDeAlimentos = new Array<any>();
  formulario: FormGroup;

  private payloadBuscaAlimentos: any;




  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dataBaseService: DatabaseService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
  ) { }


  @HostListener('window:keyup.enter')
  onEventEnter(){
    this.buscarAlimento();
  }


  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      alimento: [null, [Validators.required, Validators.minLength(3)]],
      quantidade: [null, Validators.required]
    })
  }

  contemError(campo: string) {
    return !this.formulario.get(campo)?.valid && !this.formulario.hasError('required');
  }

  closeDialog() {
    this.dialogRef.close();
  }

  salvarEvento(value: any) {
    console.log('Salvar evento', value);
  }

  buscarAlimento() {
    if (!this.formulario.valid) {
      this.openSnackBar("Dados Invalidos", ":(");
    } else {
      const alimento = this.formulario.get('alimento')?.value;
      const gramas = this.formulario.get('quantidade')?.value;

      this.payloadBuscaAlimentos = {
        "alimento": alimento,
        "gramas": gramas
      }

      this.dataBaseService.getFoodByName(alimento)
        .subscribe((r: any) => {
          console.log(r);
          this.dataSource = r;
        }, (err: any) => {
          console.log('erro', err);
        })
    }
  }

  clicked(row: Food) {
    this.clickedRows.has(row) ? this.clickedRows.delete(row) : this.calculos(row);
  }

  calculos(row: Food) {

    this.clickedRows;
    const carbo = this.calcularCarboidrato(row, this.payloadBuscaAlimentos.gramas);
    const kcal = this.calcularKcal(row, this.payloadBuscaAlimentos.gramas);
    row.base_qty = this.payloadBuscaAlimentos.gramas;
    row.attributes.energy.kcal = kcal;
    this.clickedRows.add(row);
  }

  calcularKcal(food: Food, gramas: any) {
    return food.attributes.energy.kcal * gramas / 100;
  }

  calcularCarboidrato(food: Food, gramas: any): any {
    return food.attributes.carbohydrate?.qty * gramas / 100;
  }



  // (ngSubmit)="onSubmitSearch()


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }


}
