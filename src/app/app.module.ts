import {MatDatepickerModule} from '@angular/material/datepicker';
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
import { NewPatientComponent } from './components/new-patient/new-patient.component';
import { PatientService } from './services/patient.service';
import { NewNotesComponent } from './components/new-notes/new-notes.component';
import { NewDoctorComponent } from './components/new-doctor/new-doctor.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { NewSpecialtyComponent } from './components/new-specialty/new-specialty.component';
import { SpecialtyComponent } from './components/specialty/specialty.component';
import { DoctorService } from './services/doctor.service';
import { SpecialtyService } from './services/specialty.service';
import { NotesService } from './services/notes.service';
import { MatNativeDateModule } from '@angular/material/core';

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
    NewPatientComponent,
    NewNotesComponent,
    NewDoctorComponent,
    DoctorComponent,
    NewSpecialtyComponent,
    SpecialtyComponent,
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
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    HospitalService,
    PatientService,
    SpecialtyService,
    DoctorService,
    NotesService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
