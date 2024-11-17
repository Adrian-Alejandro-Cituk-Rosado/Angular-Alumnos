import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { MainComponent } from './pages/main.component';
import { AddAlumnoComponent } from './components/addalumno/addalumno.component';
import { FormsModule } from '@angular/forms';
import { NgxFileDropModule } from 'ngx-file-drop';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    MainComponent,
    AddAlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxFileDropModule // Asegúrate de que este módulo esté importado
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
