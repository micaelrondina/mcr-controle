import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { HomeComponent } from './home/home.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { HeaderComponent } from './header/header.component';
import { MenuItems } from './menu-itens/menu-itens';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective } from './accordion';
import { DietaComponent } from './dieta/dieta.component';
import { ComponentsRoutingModule } from './components.routing.module';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CdkTableModule,
    ComponentsRoutingModule
  ],
  providers: [MenuItems, MatSidenavContainer],
  entryComponents: [],
  declarations: [
    HomeComponent,
    SpinnerComponent,
    HeaderComponent,
    SidebarComponent,
    AccordionDirective,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    DietaComponent,
    DialogComponent
  ],
  exports: [
    HomeComponent,
    SpinnerComponent,
    SidebarComponent,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    DietaComponent,
    DialogComponent
  ],
})
export class ComponentsModule { }
