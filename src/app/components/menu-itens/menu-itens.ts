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
  { state: 'rel-eventos-1386', type: 'link', name: 'rel-eventos-1386', icon: 'attach_money', task: 'br.micael.dieta' },
  { state: 'ger-filas-emissor', type: 'link', name: 'EMISSOR', icon: 'attach_money', task: 'br.micael.dieta' },



  /*
  { state: 'consultar-sintetico', type: 'link', name: 'Consulta Sintética', icon: 'search', task: 'dxc.incoming.elo.cons' },
  { state: 'envio-rejeicoes', type: 'link', name: 'Reenvio', icon: 'send', task: 'dxc.incoming.elo.envrej' },
  { state: 'batimento-rejeitado', type: 'link', name: 'Batimento - Rejeitado', icon: 'build', task: 'dxc.incoming.elo.batment' },
  { state: 'batimento-acatado', type: 'link', name: 'Batimento - Acatado', icon: 'build', task: 'dxc.incoming.elo.batment' },
  { state: 'consultar-ret-payware', type: 'link', name: 'Retorno Payware', icon: 'save_alt', task: 'dxc.incoming.elo.cons' },
  */
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
