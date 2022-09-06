import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ComponentsModule } from './components/components.module';
import { SharedService } from './shared/services/shared.service';
import { AuthGuard } from './shared/auth.guard';
import { LoggedUserService } from './shared/services/logged-user.service';
import { LoaderService } from './shared/services/loader.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlimentosService } from './shared/services/alimentos.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentsModule,
  ],
  providers: [
    SharedService,
    AuthGuard,
    LoggedUserService,
    LoaderService,
    AlimentosService
  ],
  bootstrap: [AppComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports:[
  ]
})
export class AppModule { }
