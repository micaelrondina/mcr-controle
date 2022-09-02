import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  task: string;
}

const MENUITEMS = [
  { state: 'dieta', type: 'link', name: 'Calculo de Macros', icon: 'calendar_today', task: 'br.micael.dieta'},
  { state: 'financeiro', type: 'link', name: 'Controle Financeiro', icon: 'attach_money', task: 'br.micael.dieta' },
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
    /*
    let ss: any = null;
    let listItensMenu: any = [];

    //verificando para quais itens de menu o usuario tem acesso
    if (ss == null) {
      MENUITEMS.forEach(element => {
        listItensMenu.push(element);
      });
      return listItensMenu;
    } else {
      return MENUITEMS;
    }
    */
  }
}
