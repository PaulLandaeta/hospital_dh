import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/shared/home/home.component';

// Services
import { HospitalService } from './services/hospital.service';
import { HospitalsComponent } from './components/shared/hospitals/hospitals.component';
import { PatientsComponent } from './components/patients/patients.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { NotesComponent } from './components/notes/notes.component';
import { SpecialityComponent } from './components/speciality/speciality.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { PatientComponent } from './components/patient/patient.component';
import { HospitalComponent } from './components/hospital/hospital.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HospitalsComponent,
    PatientsComponent,
    DoctorsComponent,
    NotesComponent,
    SpecialityComponent,
    PatientComponent,
    HospitalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HospitalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
